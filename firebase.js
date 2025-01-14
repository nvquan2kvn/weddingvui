// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrqDBrw7unJaRRd360oWsq6A2voHDz6eI",
  authDomain: "weddingvui-67e85.firebaseapp.com",
  projectId: "weddingvui-67e85",
  storageBucket: "weddingvui-67e85.firebasestorage.app",
  messagingSenderId: "990759065055",
  appId: "1:990759065055:web:4cccea1d3a1eff25c8a06a",
  measurementId: "G-PX29KJG7CW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };