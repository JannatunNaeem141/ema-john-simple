// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVLu3G3JT_uVmyuIAsvYM8_x4FiW2QwAA",
    authDomain: "ema-john-simple-1cc6d.firebaseapp.com",
    projectId: "ema-john-simple-1cc6d",
    storageBucket: "ema-john-simple-1cc6d.appspot.com",
    messagingSenderId: "825057332917",
    appId: "1:825057332917:web:a6a19d3d9b26551c4238fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;