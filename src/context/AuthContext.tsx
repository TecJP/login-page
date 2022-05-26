import { ReactNode, useState, createContext, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

import { auth, database, updateProfile, FirebaseError } from '../services/firebase';
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
}

type CreateUserData = Omit<User, 'id'>;
type LoginData = Omit<User, 'id' | 'name'>;
type UserData = Omit<User, 'password'>;


type AuthContextType = {
  user: UserData | undefined;
  createUserWithFirebase: (args: CreateUserData) => Promise<void>;
  signIn: (args: LoginData) => Promise<void>;
  signOut: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthProviderProps) {
  const [user, setUser] = useState<UserData>();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubiscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { uid, displayName, email, } = user;

        if (!(uid && displayName && email)) {
          return;
        }

        setUser({
          id: uid,
          name: displayName,
          email: email,
        });
      }
    })

    return () => {
      unsubiscribe();
    }
  }, []);

  async function createUserWithFirebase({ name, email, password }: CreateUserData) {
    try {
      const createUser = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(createUser.user, {
        'displayName': name
      });
      const createdUser = createUser.user;
      await addDoc(collection(database, "users"), {
        uid: createdUser.uid,
        displayName: name,
        name,
        authProvider: "local",
        email,
      });
      if (createdUser) {
        const { displayName, uid } = createdUser;
        if (!displayName) {
          console.log('Missing information from account');
          return;
        }
        setUser({
          id: uid,
          name: displayName,
          email: email,
        });
      }
      navigate('dashboard');
    } catch (error) {
      if (error instanceof FirebaseError) {
        const emailAlreadyUsed = error.code === 'auth/email-already-in-use';

        if (emailAlreadyUsed) {
          toast.error('Email ja está sendo utilizado.');
        }
      }
    };
  }

  async function signIn({ email, password }: LoginData) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error);
    };
  }

  async function signOut() {
    setUser(undefined);
    return auth.signOut()
  }

  const value = {
    user,
    createUserWithFirebase,
    signIn,
    signOut,
  }

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
}