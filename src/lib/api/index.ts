import Axios from "axios"
import { axiosBaseQuery } from "./index.axiosquery"

export const baseURL = "http://localhost:8000"

export const mainInstance = Axios.create({
    baseURL
})

export const baseQuerySettings = {
    baseQuery: axiosBaseQuery({baseUrl: baseURL}),
}

export * from "./auth"