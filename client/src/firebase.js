// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-8b526.firebaseapp.com",
  projectId: "mern-estate-8b526",
  storageBucket: "mern-estate-8b526.appspot.com",
  messagingSenderId: "938642523231",
  appId: "1:938642523231:web:1b818e51f02f41a0a487ea",
  measurementId: "G-5RWESVP3NE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
