import { getAuth } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

export { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, sendEmailVerification, signOut, onAuthStateChanged, updatePassword,confirmPasswordReset } from "firebase/auth";
export { auth };