import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBeRhvvModDFiMoDGbNMWOAuEkif3Tul_w",
  authDomain: "fir-intro-3eca8.firebaseapp.com",
  projectId: "fir-intro-3eca8",
  storageBucket: "fir-intro-3eca8.firebasestorage.app",
  messagingSenderId: "860089262185",
  appId: "1:860089262185:web:53760c5ec37526c284c2f8",
  measurementId: "G-LDLKHE4223"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);