// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1ypAImc8ZoZBAZUYTU1HAsa8s2jae7PM",
  authDomain: "fitappg09.firebaseapp.com",
  projectId: "fitappg09",
  storageBucket: "fitappg09.appspot.com",
  messagingSenderId: "732652550323",
  appId: "1:732652550323:web:4ee5867408cbb456d198c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
