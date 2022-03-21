// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth"
import { FacebookAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWtFf0p1n6ylFocTehTvS2kpuDntUyqQ0",
    authDomain: "resetario-c6a17.firebaseapp.com",
    projectId: "resetario-c6a17",
    storageBucket: "resetario-c6a17.appspot.com",
    messagingSenderId: "884419254263",
    appId: "1:884419254263:web:3e2774542e527d4aaa40f2"
};

console.log(process.env)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore()

export {
    app,
    google,
    facebook,
    db
}
