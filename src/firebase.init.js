// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDkD6-qQIcD4PNoAyW-Sr_U08weXGGIYE",
  authDomain: "genius-car-services-98ce8.firebaseapp.com",
  projectId: "genius-car-services-98ce8",
  storageBucket: "genius-car-services-98ce8.appspot.com",
  messagingSenderId: "971582324539",
  appId: "1:971582324539:web:c285c050570d727036011e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId:  process.env.REACT_APP_projectId,
//   storageBucket:  process.env.REACT_APP_storageBucket,
//   messagingSenderId:  process.env.REACT_APP_messagingSenderId,
//   appId:  process.env.REACT_APP_appId
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app)

// export default auth;