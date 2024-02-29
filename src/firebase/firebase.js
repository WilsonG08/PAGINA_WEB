import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/database'
import { getDatabase } from "firebase/database";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1ho5mX-OGMJWJzywoXdPdK1IkoxBB2gs",
  authDomain: "geopoli-28101.firebaseapp.com",
  databaseURL: "https://geopoli-28101-default-rtdb.firebaseio.com",
  projectId: "geopoli-28101",
  storageBucket: "geopoli-28101.appspot.com",
  messagingSenderId: "975892626004",
  appId: "1:975892626004:web:d0b6d1a3f51656e6accbc1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);


