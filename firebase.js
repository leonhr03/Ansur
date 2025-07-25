import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAQUNvplR1fDUbWViXtifDmM1X5rfu1Ipk",
    authDomain: "ansur-82cf3.firebaseapp.com",
    projectId: "ansur-82cf3",
    storageBucket: "ansur-82cf3.appspot.com",
    messagingSenderId: "384944827375",
    appId: "1:384944827375:web:02577e192d190a23ee241a",
    measurementId: "G-ZDVQXMGGM8",
    databaseURL: "https://ansur-82cf3-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const getFirebaseAuth = () => getAuth(app);
export const db = getDatabase(app); // <--- Realtime DB Export
