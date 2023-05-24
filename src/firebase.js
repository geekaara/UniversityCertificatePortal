// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZLsNbWv1Vpat9BmlRP5-5lcilBZRmtSQ",
  authDomain: "university-cert.firebaseapp.com",
  databaseURL: "https://university-cert-default-rtdb.firebaseio.com",
  projectId: "university-cert",
  storageBucket: "university-cert.appspot.com",
  messagingSenderId: "897703350771",
  appId: "1:897703350771:web:5747ef6a0df567147cc286"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
