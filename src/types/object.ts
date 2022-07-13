import { Waste } from "lib/assets/data/waste"
import { Report } from "./report"
import { Talon } from "./talon"

export interface WasteInfo {
	id: string
	name: Waste
}

export interface ObjectData {
	id: string
	name: string
	wastes: WasteInfo[]
}

export interface ObjectDataPayload extends Pick<ObjectData, "name"> {
	wastes: Waste[]
}

export interface TalonForObject extends Talon {
	usedInReport?: boolean
}

export interface ObjectTotalInfo {
	report: Report | null
	tickets: TalonForObject[]
}

export interface ObjectsTotalInfo {
	reports: Report[]
	tickets: {
		[key: string]: TalonForObject[]
	}
	facilityNumber: number
}