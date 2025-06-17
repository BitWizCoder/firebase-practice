// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhfD-_0pErwOci67-jNt93Ms5hLDnsdUU",
  authDomain: "fir-practice-7b443.firebaseapp.com",
  projectId: "fir-practice-7b443",
  storageBucket: "fir-practice-7b443.firebasestorage.app",
  messagingSenderId: "1074132179571",
  appId: "1:1074132179571:web:8493a01ed16afb4a2de806",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    console.log(user);
  } catch (err) {
    console.error(err);
  }
};

export { registerWithEmailAndPassword };
