import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    // ... FIREBASE_CONFIGURATION
    apiKey: "AIzaSyB1Vzb2p4ydAdrGcyClDi3u-kc_AaFPZ1k",
    authDomain: "class-work-865db.firebaseapp.com",
    projectId: "class-work-865db",
    storageBucket: "class-work-865db.appspot.com",
    messagingSenderId: "680224617329",
    appId: "1:680224617329:web:34d34882d84941c150bcd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)