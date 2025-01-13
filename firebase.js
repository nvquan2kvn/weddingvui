// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMoCktisuU1K6zYJioadTq0fEGkqwTcnw",
  authDomain: "nvquan-vn.firebaseapp.com",
  projectId: "nvquan-vn",
  storageBucket: "nvquan-vn.firebasestorage.app",
  messagingSenderId: "411314671571",
  appId: "1:411314671571:web:614fdcda52d27c9230e926",
  measurementId: "G-Y468SNHRX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };