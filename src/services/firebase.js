import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebase from "@firebase/app-compat";

const firebaseConfig = {
  apiKey: "AIzaSyBNsrRZ13s71uAd1k0OXTCPXwyD8AyTkBc",
  authDomain: "chat-app-861e9.firebaseapp.com",
  projectId: "chat-app-861e9",
  storageBucket: "chat-app-861e9.appspot.com",
  messagingSenderId: "441792950893",
  appId: "1:441792950893:web:d333a68cc41e38d9938564",
  measurementId: "G-691PGY36FG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebase.auth();
const analytics = getAnalytics(app);
const db = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, analytics, firebase };
