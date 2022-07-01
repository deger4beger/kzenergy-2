import Input from "app/components/Input"
import Modal from "app/components/Modal"
import React, { useState } from "react"
import { ObjectData } from "types/object"
import s from "./index.module.scss"

const ControlPanel = () => {

	const [modalActive, setModalActive] = useState(false)
	const [objectData, setObjectData] = useState<ObjectData>({name: "", wastes: []})

	const onSetObjectInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
		setObjectData(prev => ({
			...prev,
			name: e.target.value
		}))
	}

	return (
		<div className={s.wrapper}>
			<div className={s.title}>
				List of your objects
			</div>
			<div className={s.addBtn} onClick={() => setModalActive(true)}>
				+
			</div>
			<Modal
				active={modalActive}
				setActive={setModalActive}
				title="Создание нового объекта"
			>
				<div className={s.modal}>
					<div className={s.form}>
						<Input
							name="Название объекта"
							onChange={onSetObjectInfo}
							placeholder="Название объекта"
							type="text"
							value={objectData?.name}
						/>
					</div>
				</div>
			</Modal>
		</div>
	)
}

export default ControlPanel