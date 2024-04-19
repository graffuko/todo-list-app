import { initializeApp, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyAqVMv2I42rzmDgzgPRtCjYPXL4kIcjb2E",
    authDomain: "todo-list-app-bf4a3.firebaseapp.com",
    projectId: "todo-list-app-bf4a3",
    storageBucket: "todo-list-app-bf4a3.appspot.com",
    messagingSenderId: "58581809262",
    appId: "1:58581809262:web:3e0420fb90cc97af6cce7f",
    measurementId: "G-4H5FDPZNFT"
};



const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);