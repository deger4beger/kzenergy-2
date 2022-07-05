import React, { useState } from "react"
import GroupLayout from "app/components/GroupLayout"
import SimpleButton from "app/components/SimpleButton"
import { ObjectData } from "types/object"
import Talons from "./Talons"
import Reports from "./Reports"
import { useGetObjectInfoQuery } from "lib/api/object/index.query"
import Preloader from "app/components/Preloader"


interface Props {
	object: ObjectData
	onComeBackClick: () => void
}
export type DocumentType = null | "ticket" | "report"

const ObjectMenu: React.FC<Props> = ({
	object: { id, name, wastes },
	onComeBackClick
}) => {

	const { data, isLoading } = useGetObjectInfoQuery(id)

	return (
		<GroupLayout
			title={name}
			btns={ <SimpleButton
				onClick={onComeBackClick}
				text="← Вернуться к выбору объекта"
			/> }>
			<div style={{ marginTop: "16px" }}>
				{ (isLoading || !data) ? <Preloader /> : <>
					{ !data?.report && <Talons talons={data.tickets} /> }
					{ data?.report && <Reports /> }
				</> }
			</div>
		</GroupLayout>
	)
}

export default ObjectMenu