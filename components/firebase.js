// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUzrP68SoHji-6ZSOXoUsVXmHtOPWElbw",
  authDomain: "product-4bc81.firebaseapp.com",
  projectId: "product-4bc81",
  storageBucket: "product-4bc81.appspot.com",
  messagingSenderId: "542236433500",
  appId: "1:542236433500:web:5225a004fa9b7004521a99",
  measurementId: "G-EJWWG82QHJ",
};

if (!getApps().length) {
  var app = initializeApp(firebaseConfig);
}

export const auth = getAuth(app);

export const db = getFirestore(app);
