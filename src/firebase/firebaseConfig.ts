// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCXhv7VT_Oe1gJ_axB615H-r7hF9cE-CI",
    authDomain: "busan1107.firebaseapp.com",
    projectId: "busan1107",
    storageBucket: "busan1107.firebasestorage.app",
    messagingSenderId: "995058420353",
    appId: "1:995058420353:web:a904e39bb039ba07261b80",
    measurementId: "G-QF2BB23S23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);