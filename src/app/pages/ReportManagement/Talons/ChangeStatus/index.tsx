import Button from "app/components/Button"
import Dropdown from "app/components/Dropdown"
import Input from "app/components/Input"
import Modal from "app/components/Modal"
import React, { useState } from "react"
import { PatchTalonStatusPayload, TalonStatus } from "types/talon"

interface Props {
	active: boolean
	setActive: (active: boolean) => void
	btnOnClick: (payload: PatchTalonStatusPayload) => void
	btnLoading: boolean
}

const ChangeStatus: React.FC<Props> = ({
	active,
	setActive,
	btnOnClick,
	btnLoading
}) => {

	const [payload, setPayload] = useState<PatchTalonStatusPayload>({
		message: null,
		status: "" as TalonStatus
	})
	const isBtnDisabled = Object.values(payload).some(el => !el)

	const setMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPayload(prev => ({
			...prev,
			message: e.target.value ? e.target.value : null
		}))
	}

	const setFormSelectValue = (
		fieldName: keyof typeof payload
	) => (
		value: string,
	) => {
		setPayload(prev => ({
			...prev,
			[fieldName]: value
		}))
	}

	return (
		<Modal
			active={active}
			setActive={setActive}
			title="Форма для смены статуса"
		>
			<div>
				<Dropdown
					title="Выберите новый статус"
					selected={payload.status}
					setSelected={setFormSelectValue("status")}
					options={Object.values(TalonStatus)}
				/>
				<Input
					name="Сообщение для работника (при отклонении)"
					onChange={setMessage}
					placeholder="Сообщение"
					type="text"
					value={payload.message ? payload.message : ""}
				/>
				<Button
					content="Подтвердить"
					onClick={() => btnOnClick(payload)}
					disabled={isBtnDisabled}
					loading={btnLoading}
					type="dark"
					styles={{
						borderRadius: "20px",
						marginTop: "30px"
					}}
				/>
			</div>
		</Modal>
	)

}

export default ChangeStatus