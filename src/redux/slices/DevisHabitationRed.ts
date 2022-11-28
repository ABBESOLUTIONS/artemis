import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DevisHabitationModel } from "../../models/DevisHabitationModel";
import * as allDevisHabitation from "../../services/firestore/Devis/DevisAuto";



export const addDevisHabitation = createAsyncThunk<string, {oneDevisHabitation: DevisHabitationModel}>(
    // "allDevisAuto/addDevisAuto",
    "allDevisHabitation/addDevisHabitation",
    async (args) => {
        const {oneDevisHabitation} = args;
        return await allDevisHabitation.addDevisHabitation(oneDevisHabitation);
        // return await allDevisAuto.addDevisAuto(oneDevisAuto);
    }
);

interface DevisHabitationState {
    allDevisHabitation: Array<DevisHabitationModel>
};

const initialState: DevisHabitationState = {
    allDevisHabitation: [],
};

const devisHabitationSlice = createSlice({
    name: "allDevisHabitation",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
    }
});

// export const { } = ridesSlice.actions;
export default devisHabitationSlice.reducer;