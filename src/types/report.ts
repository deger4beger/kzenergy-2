import { UserData } from "./user"

export interface Report {
	id: string
	date: string
	user: Pick<UserData, "fullname">
	facilityName?: string
}