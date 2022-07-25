import { createAsyncThunk } from "@reduxjs/toolkit"
import { authApi } from "../../api"
import { SigninPayload, SignupPayload } from "../../../types/user"
import { errorHandler } from "../helpers/errorHandler"

export const signinThunk = createAsyncThunk(
    "auth/signin",
    async (payload: SigninPayload, thunkAPI) => {
        try {
            return await authApi.signin(payload)
        } catch (e: any) {
            return thunkAPI.rejectWithValue(errorHandler(e, "Authorization failed"))
        }
    }
)

export const signupThunk = createAsyncThunk(
    "auth/signup",
    async (payload: SignupPayload, thunkAPI) => {
        try {
            return await authApi.signup(payload)
        } catch (e: any) {
            return thunkAPI.rejectWithValue(errorHandler(e, "Registration failed"))
        }
    }
)

export const permissionThunk = createAsyncThunk(
    "auth/permission",
    async (_, thunkAPI) => {
        try {
            return await authApi.getPermission()
        } catch (e: any) {
            return thunkAPI.rejectWithValue(errorHandler(e, "Authorization failed"))
        }
    }
)
