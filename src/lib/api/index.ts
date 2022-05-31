import Axios from "axios"

const baseURL = "http://localhost:8000"

export const mainInstance = Axios.create({
    baseURL
})

export * from "./auth"