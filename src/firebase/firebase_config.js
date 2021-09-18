// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqXYaxhFST-a7ijzwviecpXHZPbhmjXGU",
  authDomain: "mreshoper-5172e.firebaseapp.com",
  projectId: "mreshoper-5172e",
  storageBucket: "mreshoper-5172e.appspot.com",
  messagingSenderId: "1057612269295",
  appId: "1:1057612269295:web:c6a33c64a5b2f20a597d1a",
  measurementId: "G-9D85LSMP2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);