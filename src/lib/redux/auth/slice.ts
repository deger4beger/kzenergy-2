import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserData, UserRoles } from "../../../types/user"
import { signinThunk, signupThunk } from "./thunks"
import { Nullable } from "../../../types/infered"
import { isTokenValid } from "../../utils/jwt"

interface IUserState {
  userData: Nullable<UserData>
  isInitialized: boolean
  isAuth: boolean
  isLoading: boolean
  error: string | null
}

export const initialState: IUserState = {
  userData: {
    id: null,
    fullname: null,
    email: null,
    phone: null,
    token: null,
    role: null
  },
  isInitialized: false,
  isAuth: false,
  isLoading: false,
  error: null
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initializeUser(state) {
      const userData = isTokenValid()
      if (userData) {
        state.isAuth = true
        state.userData = userData
      }
      state.isInitialized = true
    },
    resetError(state) {
      state.error = null
    },
    logout(state) {
      state.userData = initialState.userData
      state.isAuth = false
      localStorage.removeItem("user")
    }
  },
  extraReducers: {
    ...[signinThunk, signupThunk].reduce((acc, key) => ({
      ...acc,
      [key.pending.type]: (state) => {
        state.isLoading = true
      }
    }), {}),
    ...[signinThunk, signupThunk].reduce((acc, key) => ({
      ...acc,
      [key.fulfilled.type]: (state, action: PayloadAction<UserData>) => {
        state.isLoading = false
        state.error = ""
        state.isAuth = true
        state.userData = action.payload
        localStorage.setItem("user", JSON.stringify(action.payload))
      }
    }), {}),
    ...[signinThunk, signupThunk].reduce((acc, key) => ({
      ...acc,
      [key.rejected.type]: (state,  action: PayloadAction<string>) => {
        state.isLoading = false
        state.error = action.payload
      },
    }), {})
  }
})

export const { initializeUser, logout, resetError } = userSlice.actions

export default userSlice.reducer