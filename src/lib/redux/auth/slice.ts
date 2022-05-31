import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserData, UserRoles } from "../../../types/user"
import { Nullable } from "../../../types/infered"
import { isTokenValid } from "../../../app/validators/token"
import { signinThunk, signupThunk } from "./thunks"

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

function expand(obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i],
            subkeys = key.split(/,\s?/),
            target = obj[key];
        delete obj[key];
        subkeys.forEach(function(key) { obj[key] = target; })
    }
    return obj;
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
    logout(state) {
      state = initialState
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

export const { initializeUser, logout } = userSlice.actions

export default userSlice.reducer