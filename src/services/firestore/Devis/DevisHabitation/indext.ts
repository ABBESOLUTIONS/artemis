import { DevisHabitationModel } from "../../../../models/DevisHabitationModel";
import * as firestore from "../../index";

const devisHabitationRef = firestore.collection(firestore.firestore, "allDevisHabitation");


export const addDevisHabitation = async (devisHabitation: DevisHabitationModel): Promise<string> => {
    return (await firestore.addDoc(devisHabitationRef, devisHabitation)).id;
};

