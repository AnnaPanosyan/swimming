import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  // apiKey: REACT_APP_AP_KEY,
  // authDomain: REACT_APP_AUTH_DOMAIN,
  // projectId: REACT_APP_PROJECT_ID,
  // storageBucket: REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: REACT_APP_MESSAGEING_SENDER_ID,
  // appId: REACT_APP_APP_ID,
  // measurementId: REACT_APP_MEASUREMENT_ID

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


