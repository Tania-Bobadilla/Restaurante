// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTc6HGFSjx9hiqHYPRoA9q7a0UvpLVLnw",
  authDomain: "restaurant-hariyali.firebaseapp.com",
  projectId: "restaurant-hariyali",
  storageBucket: "restaurant-hariyali.appspot.com",
  messagingSenderId: "92430149997",
  appId: "1:92430149997:web:2a8e3290e002358505d264"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const db = app.firestore()


//PROFE
// Servicios ocupados
export const db = getFirestore(app)