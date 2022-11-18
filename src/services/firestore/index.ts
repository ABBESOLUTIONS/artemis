import { getFirestore } from "firebase/firestore";
import { app } from "../firebase";

const firestore = getFirestore(app);

export { collection, query, where, getDocs, addDoc } from "firebase/firestore";
export { firestore };