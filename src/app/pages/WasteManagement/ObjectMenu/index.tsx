import React from "react"
import GroupLayout from "app/components/GroupLayout"
import SimpleButton from "app/components/SimpleButton"
import { ObjectData } from "types/object"


interface Props {
	object: ObjectData
	onComeBackClick: () => void
}

const ObjectMenu: React.FC<Props> = ({
	object: { id, name, wastes },
	onComeBackClick
}) => {

	return <>
		<GroupLayout
			title={name}
			btns={ <SimpleButton
				onClick={onComeBackClick}
				text="← Вернуться к выбору объекта"
			/> }>
			<div style={{display: "flex", flexWrap: "wrap"}}>
				Контент
				{/*{ loading && <Preloader /> }*/}
			</div>
		</GroupLayout>
	</>

}

export default ObjectMenu