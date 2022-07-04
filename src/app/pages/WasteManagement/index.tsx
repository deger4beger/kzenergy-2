import { useGetAllDialogsQuery } from "lib/api/object/index.query"
import { useState } from "react"
import { ObjectData } from "types/object"
import SelectObject from "./SelectObject"

const WasteManagement = () => {

	const [selectedObject, setSelectedObject] = useState<null | ObjectData>(null)
	const { data: objects, isLoading: getObjectsLoading } = useGetAllDialogsQuery()

	return (
		<>
			{ !selectedObject && <SelectObject
				objects={objects}
				loading={getObjectsLoading}
			/> }
		</>
	)
}

export default WasteManagement