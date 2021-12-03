// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALEZ1XWK_GJF5pRPn95l4atnulMJ9j6IA",
  authDomain: "storereact-994cf.firebaseapp.com",
  projectId: "storereact-994cf",
  storageBucket: "storereact-994cf.appspot.com",
  messagingSenderId: "771151477844",
  appId: "1:771151477844:web:7a2a3be2995dbf625901c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)