import s from "./index.module.scss"
import cn from "classnames"
import Modal from "app/components/Modal"
import { useState } from "react"
import { AggregateState, MeasureSystem, TicketPayload, WasteDestinationType } from "types/ticket"
import Dropdown from "app/components/Dropdown"
import Input from "app/components/Input"
import Button from "app/components/Button"

interface Props {
	active: boolean
	setActive: (active: boolean) => void
}

const TalonForm: React.FC<Props> = ({
	active,
	setActive
}) => {

	const [ticketPayload, setTicketPayload] = useState<TicketPayload>({
		aggregateState: "" as AggregateState,
		wasteDestinationType: "" as WasteDestinationType,
		measureSystem: "" as MeasureSystem,
		quantity: 0
	})

	const setQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTicketPayload(prev => ({
			...prev,
			quantity: Number(e.target.value)
		}))
	}

	const setFormSelectValue = (
		fieldName: keyof typeof ticketPayload
	) => (
		value: string,
	) => {
		setTicketPayload(prev => ({
			...prev,
			[fieldName]: value
		}))
	}

	return (
		<Modal
			active={active}
			setActive={setActive}
			title="Форма для заполнения данных объекта"
		>
			<div className={s.modal}>
				<Dropdown
					title="Агрегатное состояние"
					selected={ticketPayload.aggregateState}
					setSelected={setFormSelectValue("aggregateState")}
					options={Object.values(AggregateState)}
				/>
				<Dropdown
					title="Тип назначения отходов"
					selected={ticketPayload.wasteDestinationType}
					setSelected={setFormSelectValue("wasteDestinationType")}
					options={Object.values(WasteDestinationType)}
				/>
				<Dropdown
					title="Система измерения"
					selected={ticketPayload.measureSystem}
					setSelected={setFormSelectValue("measureSystem")}
					options={Object.values(MeasureSystem)}
				/>
				<Input
					name="Количество"
					onChange={setQuantity}
					placeholder="Количество"
					type="number"
					value={ticketPayload.quantity}
				/>
				<Button
					content="Создать объект"
					onClick={() => console.log(1)}
					disabled={false}
					loading={false}
					type="dark"
					styles={{
						borderRadius: "20px",
						marginTop: "20px"
					}}
				/>
			</div>
		</Modal>
	)
}

export default TalonForm