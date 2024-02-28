// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {
  getFirestore,  query,  getDocs,  collection,  where,  addDoc,} from "firebase/firestore";

import 'firebase/compat/auth'; 

const firebaseConfig = {
  apiKey: "AIzaSyB8bM2ic2QjIWOXXsDJXL9GK_mRCNfLg6o",
  authDomain: "trenslyfe.firebaseapp.com",
  projectId: "trenslyfe",
  storageBucket: "trenslyfe.appspot.com",
  messagingSenderId: "626078776707",
  appId: "1:626078776707:web:0e5660c31122b2bc938ab6",
  measurementId: "G-26YY588L43"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);


const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Initialize Firebase



export { app, auth ,signInWithGoogle };