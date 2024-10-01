// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkq8F--ZYjHnT14-8l88fvqi02aihk_sE",
  authDomain: "netflix-clone-695cb.firebaseapp.com",
  projectId: "netflix-clone-695cb",
  storageBucket: "netflix-clone-695cb.appspot.com",
  messagingSenderId: "553342814894",
  appId: "1:553342814894:web:0a6b9fe0da65ee9809bb3f",
  measurementId: "G-V7PDMF9VD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);