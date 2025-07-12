// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDh15TGGxNm4XtJ2Fl0e5lBKYWOQilX3Pc",
    authDomain: "ansur-7bcc2.firebaseapp.com",
    projectId: "ansur-7bcc2",
    storageBucket: "ansur-7bcc2.firebasestorage.app",
    messagingSenderId: "994369112084",
    appId: "1:994369112084:web:3a35b75ba0cf549b12bf01",
    measurementId: "G-44464ZL7W1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);