import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAGeZVgqTkVzvuUin9rPOu8BoV01zxBXZI",
    authDomain: "rtk-firebase-d9d14.firebaseapp.com",
    projectId: "rtk-firebase-d9d14",
    storageBucket: "rtk-firebase-d9d14.appspot.com",
    messagingSenderId: "779120855805",
    appId: "1:779120855805:web:9393c76a264c2325f7cc94"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)