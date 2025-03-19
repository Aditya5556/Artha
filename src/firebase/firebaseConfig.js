// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeUI1JUttw57dABlZrb3uBi-NAnEbwz2E",
  authDomain: "nexartha.firebaseapp.com",
  databaseURL: "https://nexartha-default-rtdb.firebaseio.com",
  projectId: "nexartha",
  storageBucket: "nexartha.firebasestorage.app",
  messagingSenderId: "917552494031",
  appId: "1:917552494031:web:a589208afde3e1f9ec4eba",
  measurementId: "G-9KREBTD3VC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, push, set };
