import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyC1ho5mX-OGMJWJzywoXdPdK1IkoxBB2gs",
  authDomain: "geopoli-28101.firebaseapp.com",
  databaseURL: "https://geopoli-28101-default-rtdb.firebaseio.com",
  projectId: "geopoli-28101",
  storageBucket: "geopoli-28101.appspot.com",
  messagingSenderId: "975892626004",
  appId: "1:975892626004:web:d0b6d1a3f51656e6accbc1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app); 

export { app, auth, database };
