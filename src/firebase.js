// Import the functions you need from the SDKs you need

import {getAuth} from "firebase/auth";
import { getStorage} from  "firebase/storage";
import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4mOKIfYc3cTIqn1ogF-sq_3x3_OSQtwM",
  authDomain: "chats-fd4cf.firebaseapp.com",
  projectId: "chats-fd4cf",
  storageBucket: "chats-fd4cf.appspot.com",
  messagingSenderId: "680697570291",
  appId: "1:680697570291:web:5d2379e8b712737e502886"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()