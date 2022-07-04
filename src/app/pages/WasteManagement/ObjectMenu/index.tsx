import React from "react"
import { ObjectData } from "types/object"


interface Props {
	object: ObjectData
}

const ObjectMenu: React.FC<Props> = ({
	object: { id, name, wastes }
}) => {

	return <>
		{ name }
	</>

}

export default ObjectMenu