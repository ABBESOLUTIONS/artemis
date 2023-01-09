import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DevisAutoModel } from "../../models/DevisAutoModel";
import * as allDevisAuto from "../../services/firestore/Devis/DevisAuto";

export const addDevisAuto = createAsyncThunk<string, {oneDevisAuto: DevisAutoModel}>(
    "allDevisAuto/addDevisAuto",
    async (args) => {
        const {oneDevisAuto} = args;
        return await allDevisAuto.addDevisAuto(oneDevisAuto);
    }
);

interface DevisAutoState {
    allDevisAuto: Array<DevisAutoModel>
};

const initialState: DevisAutoState = {
    allDevisAuto: [],
};

const devisAutoSlice = createSlice({
    name: "allDevisAuto",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
    }
});

// export const { } = ridesSlice.actions;
export default devisAutoSlice.reducer; 