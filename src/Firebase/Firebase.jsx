import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
// Import other Firebase services as needed


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpnNt41sWQI6OOBFDqa-PwHldfptqI8Oo",
  authDomain: "clone-a59b2.firebaseapp.com",
  projectId: "clone-a59b2",
  storageBucket: "clone-a59b2.appspot.com",
  messagingSenderId: "445101233532",
  appId: "1:445101233532:web:604c9af4d7c76c7f30c0f9",
  measurementId: "G-3ZCL4FWKG1"
};
 const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);



