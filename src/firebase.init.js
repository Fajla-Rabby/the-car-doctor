// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7i0UgFtSleGlhawZ2L_AKjnjlHN8iHtI",
  authDomain: "genius-car-services-39240.firebaseapp.com",
  projectId: "genius-car-services-39240",
  storageBucket: "genius-car-services-39240.appspot.com",
  messagingSenderId: "273102948531",
  appId: "1:273102948531:web:6db70a3dbc7e36afe7c8c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default app;