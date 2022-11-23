import { DevisAutoModel } from "../../../../models/DevisAutoModel";
import * as firestore from "../../index";

const devisAutoRef = firestore.collection(firestore.firestore, "allDevisAuto");


export const addDevisAuto = async (devis: DevisAutoModel): Promise<string> => {
    return (await firestore.addDoc(devisAutoRef, devis)).id;
};