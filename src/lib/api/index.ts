import Axios from "axios"
import { axiosBaseQuery } from "./index.axiosquery"

export const baseURL = "http://localhost:8000"

// Full protected
export const mainInstance = Axios.create({ baseURL })

// For auth, without protection
export const authInstance = Axios.create({ baseURL })

// For receiving permissions, half protected
export const permissionInstance = Axios.create({ baseURL })

export const baseQuerySettings = (subUrl: string) => ({
    baseQuery: axiosBaseQuery({baseUrl: baseURL + subUrl}),
})

export * from "./auth"