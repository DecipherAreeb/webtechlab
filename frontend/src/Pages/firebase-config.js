// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlwvt5J5vCLzDkq1ep_nrb-SQwx5rDRWA",
  authDomain: "restaurant-booking-373ca.firebaseapp.com",
  projectId: "restaurant-booking-373ca",
  storageBucket: "restaurant-booking-373ca.appspot.com",
  messagingSenderId: "512237036992",
  appId: "1:512237036992:web:cfb6dc3350a6dd6e17d425",
  measurementId: "G-L61D3Y207G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);