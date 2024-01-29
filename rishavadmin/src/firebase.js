import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCTatNk7hF9k07ag9RENmLoo3OYFEzjwi4",
    authDomain: "netflix-780d7.firebaseapp.com",
    projectId: "netflix-780d7",
    storageBucket: "netflix-780d7.appspot.com",
    messagingSenderId: "1073950915979",
    appId: "1:1073950915979:web:3ef9e3aba373d84efc438e",
    measurementId: "G-G4CZRH00EB"
  };

const app=initializeApp(firebaseConfig);
const storage=getStorage();

export default storage;