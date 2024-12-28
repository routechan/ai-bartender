// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKxjcJkrG54RJNv0cEoTR5TaqVOZaKm50",
  authDomain: "ai-bartender-67d9c.firebaseapp.com",
  projectId: "ai-bartender-67d9c",
  storageBucket: "ai-bartender-67d9c.firebasestorage.app",
  messagingSenderId: "654757208736",
  appId: "1:654757208736:web:64f106eb7ef1f2f0a35fc5",
  measurementId: "G-G7ESVFEVXW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
