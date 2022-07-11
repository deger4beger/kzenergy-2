import { TalonMini } from "./talon"
import { UserData } from "./user"

export interface Report {
	id: string
	date: string
	user: Pick<UserData, "fullname">
	facilityName?: string
	tickets: TalonMini[]
}