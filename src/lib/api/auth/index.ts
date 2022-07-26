import { authInstance, permissionInstance } from ".."
import { PermissionPayload, SigninPayload, SignupPayload, UserData } from "../../../types/user"

export const authApi = {
  async signin(payload: SigninPayload): Promise<UserData> {
    const res = await authInstance.post<UserData>("user/login/", payload)
      return res.data
    },
  async signup(payload: SignupPayload): Promise<UserData> {
    const res = await authInstance.post<UserData>("user/register/", payload)
      return res.data
  },
  async getPermission(): Promise<PermissionPayload> {
    const res = await permissionInstance.get<PermissionPayload>("user/permission/")
      return res.data
  }
}