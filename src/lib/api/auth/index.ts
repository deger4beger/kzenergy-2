import { mainInstance } from ".."
import { SigninPayload, SignupPayload, UserData } from "../../../types/user"

export const authApi = {
    signin(payload: SigninPayload): Promise<UserData> {
        return mainInstance.post<UserData>("user/login/", payload)
            .then(res => res.data)
    },
    signup(payload: SignupPayload): Promise<UserData> {
        return mainInstance.post<UserData>("user/register/", payload)
            .then(res => res.data)
    }
}