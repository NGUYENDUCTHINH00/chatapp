// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { setActiveScreen } from "./view/index";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7KIBbOaYqWJ-yYid79Q4oHF_vausEsUA",
  authDomain: "chat-project-e5b97.firebaseapp.com",
  projectId: "chat-project-e5b97",
  storageBucket: "chat-project-e5b97.appspot.com",
  messagingSenderId: "392398454225",
  appId: "1:392398454225:web:d7b6133c859455b96034f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
setActiveScreen("loginPage");
