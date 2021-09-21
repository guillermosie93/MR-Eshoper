import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBqXYaxhFST-a7ijzwviecpXHZPbhmjXGU",
    authDomain: "mreshoper-5172e.firebaseapp.com",
    projectId: "mreshoper-5172e",
    storageBucket: "mreshoper-5172e.appspot.com",
    messagingSenderId: "1057612269295",
    appId: "1:1057612269295:web:c6a33c64a5b2f20a597d1a",
    measurementId: "G-9D85LSMP2Q"
})

export const getFirebase = ()=> app

export const getFirestore = ()=> firebase.firestore(app)