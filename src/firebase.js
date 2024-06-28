// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
//import "firebase/compat/database";
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_CPw43zKOFqoYNwUoHuTfCrdPeDKdqbE",
  authDomain: "disneyplus-clone-dc688.firebaseapp.com",
  projectId: "disneyplus-clone-dc688",
  storageBucket: "disneyplus-clone-dc688.appspot.com",
  messagingSenderId: "926771667083",
  appId: "1:926771667083:web:cc2ee02b631eeba043348e",
  measurementId: "G-BN9W96ELBD"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();



export { auth , provider, storage};
export default db;
