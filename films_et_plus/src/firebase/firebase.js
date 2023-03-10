// Package / Dependency Imports
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const FIREBASE_AUTH_DOMAIN = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
const FIREBASE_PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID;
const FIREBASE_STORAGE_BUCKET = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
const FIREBASE_MESSAGING_SENDER_ID = process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID;
const FIREBASE_APP_ID = process.env.REACT_APP_FIREBASE_APP_ID;
const FIREBASE_MEASUREMENT_ID = process.env.REACT_APP_FIREBASE_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();


export { auth, db, provider, analytics };

export default app;
