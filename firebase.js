import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDh15TGGxNm4XtJ2Fl0e5lBKYWOQilX3Pc",
    authDomain: "ansur-7bcc2.firebaseapp.com",
    projectId: "ansur-7bcc2",
    storageBucket: "ansur-7bcc2.firebasestorage.app",
    messagingSenderId: "994369112084",
    appId: "1:994369112084:web:3a35b75ba0cf549b12bf01",
    measurementId: "G-44464ZL7W1"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

