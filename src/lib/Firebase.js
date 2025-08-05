// Import the Firebase modules
import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your Firebase config (get this from your Firebase project settings)
const firebaseConfig = {
    apiKey: "AIzaSyDpTJdZjrezBgcE1gXD6nvUJcvkbYjAtF4",
    authDomain: "userinterface-4d56e.firebaseapp.com",
    databaseURL: "https://userinterface-4d56e-default-rtdb.firebaseio.com",
    projectId: "userinterface-4d56e",
    storageBucket: "userinterface-4d56e.firebasestorage.app",
    messagingSenderId: "504722431969",
    appId: "1:504722431969:web:b3c5fc88a1f5e84d6d7ca0",
    measurementId: "G-Q9MSCTM03X"
  };

// Initialize Firebase once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Get Realtime Database instance
const database = getDatabase(app);

export { database };
