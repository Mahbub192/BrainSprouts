// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3wQcbkscNbKplTtL1DZav-eJKnm_BQIw",
  authDomain: "toy-trove.firebaseapp.com",
  projectId: "toy-trove",
  storageBucket: "toy-trove.appspot.com",
  messagingSenderId: "943081890388",
  appId: "1:943081890388:web:c6626d459f1c2ad45e43c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;