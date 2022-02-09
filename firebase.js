// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTME5QhENY9l1F9RJgyQVv9LF0Tmf4U7o",
  authDomain: "mytodoapp-4490e.firebaseapp.com",
  projectId: "mytodoapp-4490e",
  storageBucket: "mytodoapp-4490e.appspot.com",
  messagingSenderId: "557686684230",
  appId: "1:557686684230:web:cca4a0c50ac2683668e847",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
