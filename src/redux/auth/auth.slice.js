import { createSlice } from "@reduxjs/toolkit";
import { authInitialState } from "./auth.initialState";
import { userLogin, userRegister } from "./auth.thunk";

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: builder => {
        builder
        .addCase(userRegister.pending, state => {
            state.isLoading = true
        })
        .addCase(userRegister.fulfilled, (state, {payload}) => {
            const {user, token} = payload;
            state.token = token;
            state.user.name = user.name;
            state.user.email = user.email;
            state.error = null
            state.isLoading = false
        })
        .addCase(userRegister.rejected, (state, {payload}) => {
            state.error = payload
            state.isLoading = false
        })
        .addCase(userLogin.pending, state => {
            state.isLoading = true
        })
        .addCase(userLogin.fulfilled, (state, {payload}) => {
            // console.log(payload)
            // const {user, token} = payload;
            // state.token = token;
            // state.user.name = user.name;
            // state.user.email = user.email;
            state.error = null;
            state.isLoading = false
        })
        .addCase(userLogin.rejected, (state, {payload}) => {
            state.error = payload
        })
    }})

export const authReducer = authSlice.reducer;
