// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/**const firebaseConfig = {
  apiKey: "AIzaSyAUzrP68SoHji-6ZSOXoUsVXmHtOPWElbw",
  apiKey: NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "product-4bc81.firebaseapp.com",
  projectId: "product-4bc81",
  storageBucket: "product-4bc81.appspot.com",
  messagingSenderId: "542236433500",
  appId: "1:542236433500:web:5225a004fa9b7004521a99",
  measurementId: "G-EJWWG82QHJ",
}; **/

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
