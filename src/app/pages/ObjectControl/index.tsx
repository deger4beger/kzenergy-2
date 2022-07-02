import s from "./index.module.scss"
import { useState } from "react"
import GroupLayout from "app/components/GroupLayout"
import ObjectCard from "app/components/ObjectCard"
import CreateObject from "./CreateObject"

const ObjectControl = () => {

	const [modalActive, setModalActive] = useState<boolean>(false)

	const objects = [
		{
			name: "КПК",
			wastes: ["Отход номер один", "Отход номер два", "Отход номер три"]
		},
		{
			name: "УКПГ-1",
			wastes: ["Отход номер один", "Отход номер два", "Отход номер три"]
		},
		{
			name: "УКПГ-2",
			wastes: ["Отход номер один", "Отход номер два", "Отход номер три"]
		},
		{
			name: "Скважины",
			wastes: ["Отход номер один", "Отход номер два", "Отход номер три"]
		}
	]

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
					{ objects.map(object =>
						<ObjectCard
							key={object.name}
							onRemoveBtnClick={() => console.log(object.name)}
							{...object}
						/>
					) }
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