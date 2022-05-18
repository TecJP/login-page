import { Route, BrowserRouter, } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { app } from "./services/firebase";
import { Heading, Stack } from "@chakra-ui/react";


// type User = {
//   // id: string;
//   email: string;
//   name: string;
//   password: string;
// }

// type AppUser = {
//   name: string;
//   email: string;
// }

// type LogIn = Omit<User, 'id' | 'name'>;

function App() {
  // const auth = getAuth(app);

  // useEffect(() => {
  //   const unsubiscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       const { uid, displayName, email } = user;

  //       if (!displayName) {
  //         // toast.error('Missing information from Account');
  //         return;
  //       }

  //       console.log(user, uid, email);
  //     }
  //   })

  //   return () => {
  //     unsubiscribe();
  //   }
  // }, [auth]);
  // async function createUserFirebase({ email, name, password }: User) {
  //   const database = getFirestore(app);
  //   const createUser = await createUserWithEmailAndPassword(auth, email, password);
  //   console.log(createUser);
  //   const createdUser = createUser.user;
  //   await addDoc(collection(database, "users"), {
  //     id: createdUser.uid,
  //     displayName: name,
  //     authProvider: "local",
  //     email,
  //   });
  //   return createdUser;
  // }
  // async function logInWithEmailAndPassword({ email, password }: LogIn) {
  //   await signInWithEmailAndPassword(auth, email, password);
  //   console.log(auth);
  // }
  // async function logOut() {
  //   await signOut(auth);
  //   console.log(auth);
  // }
  // createUserFirebase({
  //   name: 'João Pedro de Deus Freitas',
  //   email: 'tec.joao.freitas@gmail.com',
  //   password: '123456'
  // });
  // logInWithEmailAndPassword({
  //   email: 'fenxjpgames@gmail.com',
  //   password: '123456',
  // });
  // logOut();

  return (
    <div className="App">
    </div>
  );
}

export default App;
