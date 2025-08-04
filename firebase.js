// firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, initializeAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence } from '@firebase/auth';

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

let auth;

try {
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage),
    });
} catch (e) {
    // fallback: already initialized
    auth = getAuth(app);
}

export const getFirebaseAuth = () => auth;
export const db = getDatabase(app);
