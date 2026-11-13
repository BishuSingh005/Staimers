// Firebase Web SDK Integration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Aapki Real Firebase Credentials (Screenshots se fetched)
const firebaseConfig = {
  apiKey: "AIzaSyDmS_lkjveHi3YDfzTLUd-WQDrFvdSS2QI",
  authDomain: "staimers-technical-institute.firebaseapp.com",
  projectId: "staimers-technical-institute",
  storageBucket: "staimers-technical-institute.firebasestorage.app",
  messagingSenderId: "319919670784",
  appId: "1:319919670784:web:263036eb6c0578dc283ae5",
  measurementId: "G-TCZEGFFJ86"
};

// Initialize Firebase App & Authentication
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);