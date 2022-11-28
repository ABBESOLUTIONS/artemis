import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DevisProModel } from "../../models/DevisProModel";
import * as allDevisPro from "../../services/firestore/Devis/DevisAuto";



export const addDevisPro = createAsyncThunk<string, {oneDevisPro: DevisProModel}>(
    "allDevisPro/addDevisPro",
    async (args) => {
        const {oneDevisPro} = args;
        return await allDevisPro.addDevisPro(oneDevisPro);
    }
);

interface DevisProState {
    allDevisPro: Array<DevisProModel>
};

const initialState: DevisProState = {
    allDevisPro: [],
};

const devisProSlice = createSlice({
    name: "allDevisPro",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
    }
});

// export const { } = ridesSlice.actions;
export default devisProSlice.reducer;