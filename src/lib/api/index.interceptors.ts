import Axios from "axios"
import { logout } from "../redux/auth/slice"
import { AppDispatch } from "../redux"
import { mainInstance, permissionInstance } from "."
import { isTokenValid } from "../utils/jwt"
import { getPermissionToWrite } from "lib/redux/helpers/getPermission"

export const interceptor = (dispatch: AppDispatch) => {

    const permissionInterceptor = config => {
        const permission = getPermissionToWrite()
        if (!permission) {
            throw new Axios.Cancel("Operation canceled due to lack of permissions")
        }
        return config
    }

    const authInterceptor = config => {
        const userData = isTokenValid()
        if (userData) {
            !config.headers && (config.headers = {})
            config.headers.Authorization = `Bearer ${userData.token}`
        }
        if (userData === null) {
            dispatch(logout())
            throw new Axios.Cancel("Operation canceled due to invalid token")
        }
        return config
    }

    mainInstance.interceptors.request.use(authInterceptor)
    mainInstance.interceptors.request.use(permissionInterceptor)

    permissionInstance.interceptors.request.use(authInterceptor)

}