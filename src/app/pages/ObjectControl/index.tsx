import s from "./index.module.scss"
import { useState } from "react"
import GroupLayout from "app/components/GroupLayout"
import ObjectCard from "app/components/ObjectCard"
import CreateObject from "./CreateObject"
import { useGetAllDialogsQuery } from "lib/api/object/index.query"
import Preloader from "app/components/Preloader"

const ObjectControl = () => {

	const [modalActive, setModalActive] = useState<boolean>(false)
	const { data, isLoading } = useGetAllDialogsQuery()

	return (
		<>
			<GroupLayout
				title="Список объектов компании"
				btns={
					<div className={s.addBtn} onClick={() => setModalActive(true)}>
						Создать новый +
					</div>
				}
			>
				<div className={s.content}>
					{ data?.map(object =>
						<ObjectCard
							key={object.name}
							onRemoveBtnClick={() => console.log(object.name)}
							{...object}
						/>
					) }
					{ isLoading && <Preloader /> }
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