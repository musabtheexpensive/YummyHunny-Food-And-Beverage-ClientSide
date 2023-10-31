// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnihWUtG1IXk0-yhge1xQa0vTIiRBKJoo",
  authDomain: "assignment10-foodbeverage.firebaseapp.com",
  projectId: "assignment10-foodbeverage",
  storageBucket: "assignment10-foodbeverage.appspot.com",
  messagingSenderId: "578267258842",
  appId: "1:578267258842:web:4a17712fdb8850a7f3eae3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;