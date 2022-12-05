import { initializeApp } from "firebase/app";
import { __firebase_api_key__ } from "../api/constants";

const firebaseConfig = {
  apiKey: __firebase_api_key__,
  authDomain: "crud-e5492.firebaseapp.com",
  projectId: "crud-e5492",
  storageBucket: "crud-e5492.appspot.com",
  messagingSenderId: "268887064942",
  appId: "1:268887064942:web:b78c1d578686a1de63417f",
  measurementId: "G-EDK29KVT82",
};

const firebaseApp = initializeApp(firebaseConfig, "todo-app");

export default firebaseApp;
