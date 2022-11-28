import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DevisSanteModel } from "../../models/DevisSanteModel";
import * as allDevisSante from "../../services/firestore/Devis/DevisAuto";



export const addDevisSante = createAsyncThunk<string, {oneDevisSante: DevisSanteModel}>(
    "allDevisSante/addDevisSante",
    async (args) => {
        const {oneDevisSante} = args;
        return await allDevisSante.addDevisSante(oneDevisSante);
    }
);

interface DevisSanteState {
    allDevisSante: Array<DevisSanteModel>
};

const initialState: DevisSanteState = {
    allDevisSante: [],
};

const devisSanteSlice = createSlice({
    name: "allDevisSante",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
    }
});

// export const { } = ridesSlice.actions;
export default devisSanteSlice.reducer;