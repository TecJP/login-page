import { ReactNode, useEffect, useState, createContext, useId } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

type User = {
  id: string;
  name: string;
  email: string;
}

type CreateUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  // CreateUserWithEmailAndPassword: () => Promise<void>;
}

type AuthContextType = {
  user: User | undefined;

  createUser: () => Promise<void>;
  // signInWithGoogle: () => Promise<void>;
  // signOut: () => Promise<void>;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthProviderProps) {
  const [user, setUser] = useState<User>();

  async function createUser({ name, email, password }: CreateUser) {
    const auth = getAuth();
    const database = getFirestore();
    const createUser = await createUserWithEmailAndPassword(auth, email, password);
    console.log(createUser);
    // const createdUser = createUser.user;
    // await addDoc(collection(database, "users"), {
    //   uid: createdUser.uid,
    //   name,
    //   authProvider: "local",
    //   email,
    // });
    // return createdUser;
  }

  const value = {
    user,
    createUser,
  }

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
}