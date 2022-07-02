import { Waste } from "lib/assets/data/waste"

interface WasteInfo {
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