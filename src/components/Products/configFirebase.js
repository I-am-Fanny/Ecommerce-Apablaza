
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHLz3BDtyIv9RkV2Hi92FlV9AYuxilwrU",
  authDomain: "encestalo-4028e.firebaseapp.com",
  projectId: "encestalo-4028e",
  storageBucket: "encestalo-4028e.appspot.com",
  messagingSenderId: "39541750958",
  appId: "1:39541750958:web:6c4939e26b515e24cc413f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

