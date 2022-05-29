import decode, { JwtPayload } from "jwt-decode"
import { UserData } from "../../types/user"

export const isTokenValid = () => {
	const user = localStorage.getItem("user")
	if (!user) {
		return false
	}
	const userData: UserData = JSON.parse(user)
  const decodedToken = decode<JwtPayload>(userData.token)
	if (decodedToken.exp && (decodedToken.exp * 1000 > new Date().getTime())) {
		return userData
	}
	return false
}