import { createAsyncThunk } from "@reduxjs/toolkit"

export const authThunk = createAsyncThunk(
    'user/login',
    async (payload: ILoginThunkPayload, thunkAPI) => {
        try {
            const { type, ...rest } = payload
            const userData = await userApi[type](rest)
            localStorage.setItem("user", JSON.stringify(userData))
            return userData
        } catch (e) {
            return thunkAPI.rejectWithValue("Auth failed")
        }
    }
)
export const data = 5