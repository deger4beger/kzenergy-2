import s from "./index.module.scss"
import cn from "classnames"
import React, { useState } from "react"
import { wastes } from "lib/assets/data/waste"
import { ObjectData } from "types/object"
import Input from "app/components/Input"
import Modal from "app/components/Modal"
import Button from "app/components/Button"

const ControlPanel = () => {

	const [modalActive, setModalActive] = useState<boolean>(false)
	const [objectData, setObjectData] = useState<ObjectData>({name: "", wastes: []})

	const onSetObjectInfo = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setObjectData(prev => ({
			...prev,
			name: e.target.value
		}))
	}

	const onWasteClick = (wasteIndex: number): void => {
		if (objectData.wastes.includes(wastes[wasteIndex])) {
			setObjectData(prev => ({
				...prev,
				wastes: prev.wastes.filter(el => el !== wastes[wasteIndex])
			}))
		} else {
			setObjectData(prev => ({
				...prev,
				wastes: [
					...prev.wastes,
					wastes[wasteIndex]
				]
			}))
		}
	}

	const onCreateObject = () => {
		console.log(objectData)
	}

	return (
		<div className={s.wrapper}>
			<div className={s.title}>
				Список объектов компании
			</div>
			<div className={s.addBtn} onClick={() => setModalActive(true)}>
				Создать новый +
			</div>
			<Modal
				active={modalActive}
				setActive={setModalActive}
				title="Создание нового объекта"
			>
				<div className={s.modal}>
					<Input
						name="Название объекта"
						onChange={onSetObjectInfo}
						placeholder="Название объекта"
						type="text"
						value={objectData?.name}
					/>
					<div className={s.wastes}>
						{wastes.map((waste, index) =>
							<div
								key={waste}
								className={cn(
									s.waste,
									{[s.active]: objectData.wastes.includes(waste)}
								)}
								onClick={() => onWasteClick(index)}
							>
								{ waste }
							</div>
						)}
					</div>
					<Button
						content="Создать объект"
						onClick={onCreateObject}
						type="dark"
						styles={{
							borderRadius: "20px",
							marginTop: "20px"
						}}
					/>
				</div>
			</Modal>
		</div>
	)
}

export default ControlPanel