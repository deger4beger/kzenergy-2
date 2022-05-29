import Axios from 'axios';
import { isTokenValid } from "../../app/validators/token"
import { logout } from "../redux/auth/slice"
import { AppDispatch } from "../redux"
import { mainInstance } from "."

const interceptor = (dispatch: AppDispatch) => {
    mainInstance.interceptors.request.use((config) => {
        const userData = isTokenValid()
        if (userData) {
            // (config.headers ??= {}).Authorization = `Bearer ${userData.token}` not working
            !config.headers && (config.headers = {})
            config.headers.Authorization = `Bearer ${userData.token}`
        }
        if (userData === null) {
            dispatch(logout())
            throw new Axios.Cancel("Operation canceled due to invalid token")
        }
        return config
    })
}
export default {
    interceptor,
}