import { DevisAutoModel } from "../../../../models/DevisAutoModel";
import { DevisHabitationModel } from "../../../../models/DevisHabitationModel";
import { DevisProModel } from "../../../../models/DevisProModel";
import { DevisSanteModel } from "../../../../models/DevisSanteModel";
import * as firestore from "../../index";

const devisAutoRef = firestore.collection(firestore.firestore, "allDevisAuto");


export const addDevisAuto = async (devis: DevisAutoModel): Promise<string> => {
    return (await firestore.addDoc(devisAutoRef, devis)).id;
};

const devisHabitationRef = firestore.collection(firestore.firestore, "allDevisHabitation");

export const addDevisHabitation = async (devisHabitation: DevisHabitationModel): Promise<string> => {
    return (await firestore.addDoc(devisHabitationRef, devisHabitation)).id;
};

const devisSanteRef = firestore.collection(firestore.firestore, "allDevisSante");

export const addDevisSante = async (devisSante: DevisSanteModel): Promise<string> => {
    return (await firestore.addDoc(devisSanteRef, devisSante)).id;
};
const devisProRef = firestore.collection(firestore.firestore, "allDevisPro");

export const addDevisPro = async (devisPro: DevisProModel): Promise<string> => {
    return (await firestore.addDoc(devisProRef, devisPro)).id;
};