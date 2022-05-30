import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserData, UserRoles } from "../../../types/user"
import { Nullable } from "../../../types/infered"
import { isTokenValid } from "../../../app/validators/token"

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
    logout(state) {
      state = initialState
      localStorage.removeItem("user")
    }
  }
})

export const { initializeUser, logout } = userSlice.actions

export default userSlice.reducer