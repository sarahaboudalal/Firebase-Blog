// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnHmOuYr8m5ZMBVIhjRVhpsKAcT-CKABk",
  authDomain: "fir-blog-e237b.firebaseapp.com",
  projectId: "fir-blog-e237b",
  storageBucket: "fir-blog-e237b.appspot.com",
  messagingSenderId: "51884198383",
  appId: "1:51884198383:web:343a58fcff51e68c114e1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();