// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-40358.firebaseapp.com",
  projectId: "mern-estate-40358",
  storageBucket: "mern-estate-40358.appspot.com",
  messagingSenderId: "77330730067",
  appId: "1:77330730067:web:0230d0d3616afcca908aa6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
