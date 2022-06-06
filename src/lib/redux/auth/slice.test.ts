import reducer, { initialState, initializeUser, resetError, logout } from "./slice"
import * as TokenValidation from "../../utils/jwt/index"
import { UserRoles } from "../../../types/user"

describe("Auth slice", () => {

  const isTokenValidMock = jest.spyOn(TokenValidation, "isTokenValid")

  it("should return the initial state", () => {

    expect(reducer(undefined, {})).toEqual(initialState)

  })

  it("should initialize user if userData exists", () => {

    const userData = {
      id: "123",
      fullname: "name",
      email: "mail",
      phone: "123",
      token: "token",
      role: UserRoles.Ecologist
    }

    isTokenValidMock.mockReturnValue(userData)

    expect(reducer(initialState, initializeUser())).toEqual(
      {
        userData,
        isAuth: true,
        isInitialized: true,
        isLoading: false,
        error: null
      }
    )

  })

  it("should initialize user if userData not exists", () => {

    const userData = false
    isTokenValidMock.mockReturnValue(userData)

    expect(reducer(initialState, initializeUser())).toEqual({
      ...initialState,
      isInitialized: true
    })

  })

  it("should reset error", () => {

    expect(reducer({
      ...initialState,
      error: "some error"
    }, resetError())).toEqual(initialState)

  })

  it("should logout with nullable data", () => {

    expect(reducer({
      userData: {
        id: "123",
        fullname: "name",
        email: "mail",
        phone: "123",
        token: "token",
        role: UserRoles.Ecologist
      },
      isInitialized: true,
      isAuth: true,
      isLoading: false,
      error: null
    }, logout())).toEqual({
      ...initialState,
      isInitialized: true
    })

    expect(localStorage.removeItem).toHaveBeenCalledWith("user")

  })

})