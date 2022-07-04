import s from "./index.module.scss"
import { useState } from "react"
import GroupLayout from "app/components/GroupLayout"
import ObjectCard from "app/components/ObjectCard"
import CreateObject from "./CreateObject"
import { useGetAllDialogsQuery } from "lib/api/object/index.query"
import Preloader from "app/components/Preloader"
import SimpleButton from "app/components/SimpleButton"

const ObjectControl = () => {

	const [modalActive, setModalActive] = useState<boolean>(false)
	const { data, isLoading: getObjLoading } = useGetAllDialogsQuery()

	return (
		<>
			<GroupLayout
				title="Список объектов компании"
				btns={ <SimpleButton
					onClick={() => setModalActive(true)}
					text="Создать новый +"
				/> }
			>
				<div style={{display: "flex", flexWrap: "wrap"}}>
					{ data?.map(object =>
						<ObjectCard
							key={object.name}
							{...object}
							removable
						/>
					) }
					{ getObjLoading && <Preloader /> }
				</div>
			</GroupLayout>
			<CreateObject
				active={modalActive}
				setActive={setModalActive}
			/>
		</>
	)
}

export default ObjectControl