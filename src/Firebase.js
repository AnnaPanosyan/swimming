import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCMCOrCMEKD19Ebp5AyMtuYuUj69n5242Q",
  authDomain: "arnoweb-44194.firebaseapp.com",
  projectId: "arnoweb-44194",
  storageBucket: "arnoweb-44194.appspot.com",
  messagingSenderId: "132202739762",
  appId: "1:132202739762:web:5b42ec5d6948111b7e642b",
  measurementId: "G-1JTKXZ72EY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);


