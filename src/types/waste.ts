import { Waste } from "lib/assets/data/waste"
import { MeasureSystem } from "./talon"


export interface WasteQantity {
	id: string
	name: Waste
	quantity: {
		[key in MeasureSystem]: number
	}
}

export type WasteStatByRep = {
	[key in Waste]: {
		limit: number
		info: ({
			[key in MeasureSystem]: number
		} & { date: string })[]
	}
}