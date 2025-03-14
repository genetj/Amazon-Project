// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfmLgsYylI_Wq5GVzXsoVN9ET7zNKLcdE",
  authDomain: "clone-9b0bc.firebaseapp.com",
  projectId: "clone-9b0bc",
  storageBucket: "clone-9b0bc.firebasestorage.app",
  messagingSenderId: "782443389259",
  appId: "1:782443389259:web:35351ccf74ddac98d648ce",
  measurementId: "G-HSY3HVJJEF",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore(app);

// const analytics = getAnalytics(app);
