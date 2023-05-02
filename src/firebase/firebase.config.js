// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuJIpDped-g17Mnc6wNR1Qh1uqje35-pc",
    authDomain: "chinese-lounge.firebaseapp.com",
    projectId: "chinese-lounge",
    storageBucket: "chinese-lounge.appspot.com",
    messagingSenderId: "926381530522",
    appId: "1:926381530522:web:d34ba9667781996ae0ae23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;