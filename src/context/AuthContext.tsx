import { ReactNode, useState, createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

import { auth, database } from '../services/firebase';

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
}

type AuthContextType = {
  user: User | undefined;
  // createUserFirebase: () => Promise<void>;
  // signInWithGoogle: () => Promise<void>;
  // signOut: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthProviderProps) {
  const [user, setUser] = useState<User>();

  async function createUserFirebase({ name, email, password }: User) {
    const createUser = await createUserWithEmailAndPassword(auth, email, password);
    const createdUser = createUser.user;
    await addDoc(collection(database, "users"), {
      uid: createdUser.uid,
      name,
      authProvider: "local",
      email,
    });
    console.log(createdUser);
    return;
  }

  return (
    <AuthContext.Provider value={{ user }}>
      {props.children}
    </AuthContext.Provider>
  );
}