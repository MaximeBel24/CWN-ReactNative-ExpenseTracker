// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6OkOKl2S54shV2jmSRQ_kUTmuwWkvjN4",
  authDomain: "expense-tracker-da06c.firebaseapp.com",
  projectId: "expense-tracker-da06c",
  storageBucket: "expense-tracker-da06c.firebasestorage.app",
  messagingSenderId: "318178938412",
  appId: "1:318178938412:web:630470122b098ca0654b89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// db
export const firestore = getFirestore(app);
