// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDevnGc-s3ADA7bZYk46SggO3BqPx1t_g",
  authDomain: "the-open-page.firebaseapp.com",
  projectId: "the-open-page",
  storageBucket: "the-open-page.firebasestorage.app",
  messagingSenderId: "102562262762",
  appId: "1:102562262762:web:adf0ecda0b033378a43193"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;