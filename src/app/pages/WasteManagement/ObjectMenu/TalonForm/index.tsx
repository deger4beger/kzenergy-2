import cn from "classnames"
import Modal from "app/components/Modal"
import { useState } from "react"
import { AggregateState, MeasureSystem, TalonPayload, WasteDestinationType } from "types/talon"
import Dropdown from "app/components/Dropdown"
import Input from "app/components/Input"
import Button from "app/components/Button"
import { WasteInfo } from "types/object"
import { Waste } from "lib/assets/data/waste"

interface Props {
	active: boolean
	wastes: WasteInfo[]
	setActive: (active: boolean) => void
	btnContent: string
	btnOnClick: (payload: TalonPayload) => void
	btnLoading: boolean
	initialState?: TalonPayload,
	error?: string
}

const TalonForm: React.FC<Props> = ({
	active,
	setActive,
	btnContent,
	btnOnClick,
	btnLoading,
	initialState,
	wastes,
	error
}) => {

	const [ticketPayload, setTicketPayload] = useState<TalonPayload>(
		initialState ? initialState : {
			wasteName: "" as Waste,
			aggregateState: "" as AggregateState,
			wasteDestinationType: "" as WasteDestinationType,
			measureSystem: "" as MeasureSystem,
			quantity: 0
	})
	const isBtnDisabled = Object.values(ticketPayload).some(el => !el)

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
			<div>
				{ error && <div>
					<div style={{
						textAlign: "center",
						textDecoration: "underline"
					}}>
						Талон отклонен:
					</div>
					<div style={{
						marginBottom: "20px",
						marginTop: "6px"
					}}>
						{ error }
					</div>
				</div> }
				<Dropdown
					title="Выберите отход"
					selected={ticketPayload.wasteName}
					setSelected={setFormSelectValue("wasteName")}
					options={wastes.map(wasteInfo => wasteInfo.name)}
				/>
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
					content={btnContent}
					onClick={() => btnOnClick(ticketPayload)}
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

export default TalonForm