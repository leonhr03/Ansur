// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDh15TGGxNm4XtJ2Fl0e5lBKYWOQilX3Pc",
    authDomain: "ansur-7bcc2.firebaseapp.com",
    projectId: "ansur-7bcc2",
    storageBucket: "ansur-7bcc2.firebasestorage.app",
    messagingSenderId: "994369112084",
    appId: "1:994369112084:web:3a35b75ba0cf549b12bf01",
    measurementId: "G-44464ZL7W1"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Das initialisierte Firebase-Objekt oder spezifische Dienste exportieren
export const auth = firebase.auth();
export default firebase; // Du kannst auch das gesamte Firebase-Objekt exportieren, falls es an anderer Stelle benötigt wird
