// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWlYuwfyCfzPzWr1Fbztml0a8xYou3fFA",
  authDomain: "coderhouse-71835.firebaseapp.com",
  projectId: "coderhouse-71835",
  storageBucket: "coderhouse-71835.firebasestorage.app",
  messagingSenderId: "1003702383119",
  appId: "1:1003702383119:web:01fb00c9ae2cc876aea97a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
