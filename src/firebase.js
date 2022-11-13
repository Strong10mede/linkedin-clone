// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy2yLuiIUweLLlulf02S7wD-iaDudVCHw",
  authDomain: "linkedin-clone-7b338.firebaseapp.com",
  projectId: "linkedin-clone-7b338",
  storageBucket: "linkedin-clone-7b338.appspot.com",
  messagingSenderId: "147402268088",
  appId: "1:147402268088:web:d0ee9fc42e583c57dd834d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);
