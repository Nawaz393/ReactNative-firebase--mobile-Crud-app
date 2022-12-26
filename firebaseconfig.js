import { initializeApp } from "firebase/app";
import {getFirestore} from  "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: process.env.Api_key,
  authDomain: "react-native-49f4c.firebaseapp.com",
  projectId: "react-native-49f4c",
  storageBucket: "react-native-49f4c.appspot.com",
  messagingSenderId: "151477566326",
  appId: "1:151477566326:web:d9f3ed5251d58002079857",
  measurementId: "G-NGKG8Y1QTR"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db} 
