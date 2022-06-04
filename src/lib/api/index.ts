import Axios from "axios"

export const baseURL = "http://localhost:8000"

export const mainInstance = Axios.create({
    baseURL
})

export * from "./auth"