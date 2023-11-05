// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-d0cec.firebaseapp.com",
  projectId: "blog-d0cec",
  storageBucket: "blog-d0cec.appspot.com",
  messagingSenderId: "167494910153",
  appId: "1:167494910153:web:52d41f4d03856699b30d18"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);