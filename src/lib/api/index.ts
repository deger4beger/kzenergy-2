import Axios from "axios"

const baseURL = "https://dew-chat.herokuapp.com"

export const mainInstance = Axios.create({
    baseURL
})

export * from "./auth"