// firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDh15TGGxNm4XtJ2Fl0e5lBKYWOQilX3Pc",
    authDomain: "ansur-7bcc2.firebaseapp.com",
    projectId: "ansur-7bcc2",
    storageBucket: "ansur-7bcc2.appspot.com",
    messagingSenderId: "994369112084",
    appId: "1:994369112084:web:3a35b75ba0cf549b12bf01",
    measurementId: "G-44464ZL7W1"
};

let app;
if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}

export const getFirebaseAuth = () => getAuth(app);