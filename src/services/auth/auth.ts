import { getAuth } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

export { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, sendEmailVerification, signOut, onAuthStateChanged } from "firebase/auth";
export { auth };