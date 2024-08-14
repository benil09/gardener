// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import getDatabase from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDf2-plR_xq18G8Rx-1Pv8ktVX1w1t5X9Y",
  authDomain: "gardener-dc639.firebaseapp.com",
  projectId: "gardener-dc639",
  storageBucket: "gardener-dc639.appspot.com",
  messagingSenderId: "494218959432",
  appId: "1:494218959432:web:31d48897f4dc145f89567d",
  measurementId: "G-M4ZD1QJJMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const  db=getDatabase(app);