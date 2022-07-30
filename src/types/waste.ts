import { Waste } from "lib/assets/data/waste"
import { MeasureSystem } from "./talon"


export interface WasteQantity {
	id: string
	name: Waste
	quanitiy: {
		[key in MeasureSystem]: number
	}
}