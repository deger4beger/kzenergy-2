import { createAsyncThunk } from "@reduxjs/toolkit"
import { authApi } from "../../api"
import { SigninPayload, SignupPayload } from "../../../types/user"

export const signinThunk = createAsyncThunk(
    "auth/signin",
    async (payload: SigninPayload, thunkAPI) => {
        try {
            const userData = await authApi.signin(payload)
            return userData
        } catch (e) {
            return thunkAPI.rejectWithValue("Registration failed")
        }
    }
)

export const signupThunk = createAsyncThunk(
    "auth/signup",
    async (payload: SignupPayload, thunkAPI) => {
        try {
            const userData = await authApi.signup(payload)
            return userData
        } catch (e) {
            return thunkAPI.rejectWithValue("Authorization failed")
        }
    }
)
