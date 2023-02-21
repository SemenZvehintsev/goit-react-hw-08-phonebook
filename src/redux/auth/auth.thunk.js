import { createAsyncThunk } from '@reduxjs/toolkit';
import { userPrivateAPI, userPublicAPI, token } from 'http/http';


export const userRegister = createAsyncThunk('register',
    async (user, thunkAPI) => {
        try {
            const {data} = await userPublicAPI.post('/signup', user)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const userLogin = createAsyncThunk('login',
    async (user, thunkAPI) => {
        try {
            const {data} = await userPublicAPI.post('/login', user)
            console.log(thunkAPI.getState())
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const userLogout = createAsyncThunk('logout',
    async (_, {rejectWithValue}) => {
        try {
            // token.set(getState().user.token)
            const {data} = await userPrivateAPI.post('/logout')
            console.log(data)
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const userInfo = createAsyncThunk('info',
    async (_, thunkAPI) => {
        try {
            const {data} = await userPrivateAPI.get('/current')
            console.log(data)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)