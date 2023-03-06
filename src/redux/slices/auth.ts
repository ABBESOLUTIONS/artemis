import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserModel } from "../../models/UserModel";
import { UserDataModel } from "../../models/UserDataModel";
import * as auth from "../../services/auth";

// Thunks
export const createUserWithEmailAndPassword = createAsyncThunk(
    "auth/createUserWithEmailAndPassword",
    async ({email, pwd}: {email: string, pwd: string}) => {
        return await auth.createUserWithEmailAndPassword(email, pwd);
    }
);
export const signInWithEmailAndPassword = createAsyncThunk(
    "auth/signInWithEmailAndPassword",
    async ({email, pwd}: {email: string, pwd: string}) => {
        return await auth.signInWithEmailAndPassword(email, pwd);
    }
);
export const getCurentUser = createAsyncThunk(
    "auth/getCurentUser",
    async () => await auth.getCurentUser()
);
export const signOut = createAsyncThunk(
    "auth/signOut",
    async () => await auth.signOut()
);

export const sendPasswordResetEmail = createAsyncThunk<void, {email: string}>(
    "auth/sendPasswordResetEmail",
    async(args) => {
        const {email}=args;
        return await auth.sendPasswordResetEmail(email)
    }
);

export const updatePassword = createAsyncThunk<void, {oobCode: string | null, pwd:string}> (
    "auth/updatePassword",
    async(args) => {
        const {oobCode, pwd} = args;
        return await auth.updatePassword(oobCode, pwd);
    }
)

interface AuthState {
    userData: UserDataModel | null,
    user: UserModel | null,
};

const initialState: AuthState = {
    userData: null,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(createUserWithEmailAndPassword.fulfilled, (state, { payload }) => {
            state.user = payload;
        });
        builder.addCase(signInWithEmailAndPassword.fulfilled, (state, { payload }) => {
            state.user = payload;
        });
        builder.addCase(getCurentUser.fulfilled, (state, { payload }) => {
            state.user = payload;
        });
        builder.addCase(updatePassword.fulfilled, (state, { payload }) => {
        });
    }
});

// export const { } = authSlice.actions;
export default authSlice.reducer;