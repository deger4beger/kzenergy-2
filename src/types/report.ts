import { MeasureSystem, Talon, TalonMini, WasteDestinationType } from "./talon"
import { UserData } from "./user"

export interface Report {
	id: string
	date: string
	user: Pick<UserData, "fullname">
	facilityName?: string
	tickets: TalonMini[]
}

export interface SummaryReport {
	id: string
	date: string
	user: Pick<UserData, "fullname">
	total: {
		[key in MeasureSystem | WasteDestinationType]: number
	}
	tickets: (Pick<Talon, "id" | "date" | "wasteName" | "aggregateState" | "message"> & {
		facilityName: string
		quantityByMeasureSystem: {
			[key in MeasureSystem]: number
		}
		quantityByDestinationType: {
			[key in WasteDestinationType]: number
		}
	})[]
}