import s from "./index.module.scss"
import { useState } from "react"
import GroupLayout from "app/components/GroupLayout"
import ObjectCard from "app/components/ObjectCard"
import CreateObject from "./CreateObject"
import { useGetAllDialogsQuery } from "lib/api/object/index.query"
import Preloader from "app/components/Preloader"
import { useDeleteObjectMutation } from "lib/api/object/index.mutation"

const ObjectControl = () => {

	const [modalActive, setModalActive] = useState<boolean>(false)
	const [deleteObject, { isLoading: deleteObjLoading }] = useDeleteObjectMutation()
	const { data, isLoading: getObjLoading } = useGetAllDialogsQuery()

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
							onRemoveBtnClick={() => deleteObject(object.id)}
							{...object}
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