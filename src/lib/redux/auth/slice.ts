import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { PermissionPayload, UserData } from "../../../types/user"
import { permissionThunk, signinThunk, signupThunk } from "./thunks"
import { Nullable } from "../../../types/infered"
import { isTokenValid } from "../../utils/jwt"

interface State {
  userData: Nullable<UserData>
  isInitialized: boolean
  isAuth: boolean
  isLoading: boolean
  error: string | null
  permission: PermissionPayload | null
}

export const initialState: State = {
  userData: {
    id: null,
    fullname: null,
    email: null,
    phone: null,
    token: null,
    role: null
  },
  isInitialized: false,
  isLoading: false,
  error: null,
  isAuth: false,
  permission: null
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
      state.permission = null
      localStorage.removeItem("user")
    }
  },
  extraReducers: {
    ...[signinThunk, signupThunk].reduce((acc, key) => ({
      ...acc,
      [key.pending.type]: (state: State) => {
        state.isLoading = true
      }
    }), {}),
    ...[signinThunk, signupThunk].reduce((acc, key) => ({
      ...acc,
      [key.fulfilled.type]: (state: State, action: PayloadAction<UserData>) => {
        state.isLoading = false
        state.error = ""
        state.isAuth = true
        state.userData = action.payload
        localStorage.setItem("user", JSON.stringify(action.payload))
      }
    }), {}),
    ...[signinThunk, signupThunk].reduce((acc, key) => ({
      ...acc,
      [key.rejected.type]: (state: State,  action: PayloadAction<string>) => {
        state.isLoading = false
        state.error = action.payload
      },
    }), {}),
    [permissionThunk.fulfilled.type]: (
      state: State,
      action: PayloadAction<PermissionPayload>
    ) => {
      state.permission = action.payload
    },
    [permissionThunk.rejected.type]: ( state: State ) => {
      userSlice.caseReducers.logout(state)
    }
  }
})

export const { initializeUser, logout, resetError } = userSlice.actions

export default userSlice.reducer