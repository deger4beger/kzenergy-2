import React, { useState } from "react"
import GroupLayout from "app/components/GroupLayout"
import SimpleButton from "app/components/SimpleButton"
import { ObjectData } from "types/object"
import SelectDocumentType from "./SelectDocumentType"


interface Props {
	object: ObjectData
	onComeBackClick: () => void
}
export type DocumentType = null | "ticket" | "report"

const ObjectMenu: React.FC<Props> = ({
	object: { id, name, wastes },
	onComeBackClick
}) => {

	const [documentType, setDocumentType] = useState<DocumentType>(null)

	return (
		<GroupLayout
			title={name}
			btns={ <SimpleButton
				onClick={onComeBackClick}
				text="← Вернуться к выбору объекта"
			/> }>
			<div style={{ display: "flex" }}>
				{/*{ loading && <Preloader /> }*/}
				<SelectDocumentType
					setDocumentType={setDocumentType}
					documentType={documentType}
				/>
			</div>
		</GroupLayout>
	)
}

export default ObjectMenu