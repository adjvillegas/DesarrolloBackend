var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgK7NVIbyquS8RNse0fgaOGcbztwTpkUw",
  authDomain: "backend-5b2d5.firebaseapp.com",
  projectId: "backend-5b2d5",
  storageBucket: "backend-5b2d5.appspot.com",
  messagingSenderId: "251217355551",
  appId: "1:251217355551:web:2e1455e4f70682f529c62a",
  measurementId: "G-JEM1QHXQS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);