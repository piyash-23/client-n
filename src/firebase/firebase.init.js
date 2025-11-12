// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnDkoGwEEVNIrE66rnkwThDiLIyy8iDfs",
  authDomain: "social-org-c8d74.firebaseapp.com",
  projectId: "social-org-c8d74",
  storageBucket: "social-org-c8d74.firebasestorage.app",
  messagingSenderId: "314087997074",
  appId: "1:314087997074:web:dec4e9e8fc258b2077f04b",
  measurementId: "G-96VTD53SRP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
