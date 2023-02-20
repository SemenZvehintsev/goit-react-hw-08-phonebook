import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

const userAPI = axios.create({
    baseURL: "https://connections-api.herokuapp.com/users"
})

export const userRegister = createAsyncThunk('register',
    async (user, thunkAPI) => {
        try {
            const {data} = await userAPI.post('/signup', user)
            console.log(thunkAPI)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const userLogin = createAsyncThunk('login',
    async (user, thunkAPI) => {
        try {
            const {data} = await userAPI.post('/login', user)
            console.log(thunkAPI)
            return data
        } catch (error) {
            console.log(thunkAPI)
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const userLogout = createAsyncThunk('logout',
    async (token, thunkAPI) => {
        try {
            const {data} = await userAPI.post('/logout', token)
            console.log(data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const userInfo = createAsyncThunk('info',
    async (token, thunkAPI) => {
        try {
            const {data} = await userAPI.get('/current', token)
            console.log(data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)