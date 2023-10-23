// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8oYKZ-YuXX2mKQ6O68ou-JEu6q4flSzU",
  authDomain: "restaurant-41943.firebaseapp.com",
  projectId: "restaurant-41943",
  storageBucket: "restaurant-41943.appspot.com",
  messagingSenderId: "225397275003",
  appId: "1:225397275003:web:25aa99e0e24073602665de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const db = app.firestore()


//PROFE
// Servicios ocupados
export const db = getFirestore(app)