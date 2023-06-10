// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrtyKsgbnBwvcnU5o45yw24swIOzRBHxs",
  authDomain: "final-project-f3913.firebaseapp.com",
  projectId: "final-project-f3913",
  storageBucket: "final-project-f3913.appspot.com",
  messagingSenderId: "247106817351",
  appId: "1:247106817351:web:d21b9d9fe7aa4cd8d85062"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);