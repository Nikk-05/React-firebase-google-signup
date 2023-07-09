
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAHabY_vm6ZyFcjRbJRoNxTeEHz9n1aRxo",
  authDomain: "react-login-signup-page.firebaseapp.com",
  projectId: "react-login-signup-page",
  storageBucket: "react-login-signup-page.appspot.com",
  messagingSenderId: "886422922621",
  appId: "1:886422922621:web:4f61add5f267b429329814",
  measurementId: "G-RWKKLVTZXN"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleAuthentication = new GoogleAuthProvider()
