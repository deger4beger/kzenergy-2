import GroupLayout from "app/components/GroupLayout"
import SimpleButton from "app/components/SimpleButton"
import TalonCard from "app/components/TalonCard"
import { useCreateTalonMutation, usePatchTalonMutation } from "lib/api/object/index.mutation"
import { useState } from "react"
import { WasteInfo } from "types/object"
import { Talon, TalonPayload, TalonStatus } from "types/talon"
import TalonForm from "../TalonForm"
import s from "./index.module.scss"

interface Props {
	talons: Talon[]
	wastes: WasteInfo[]
	objectId: string
	createNewDisabled: boolean
}

const Talons: React.FC<Props> = ({
	talons,
	objectId,
	wastes,
	createNewDisabled
}) => {

	const [selectedTalon, setSelectedTalon] = useState<Talon>()
	const [createTalonActive, setCreateTalonActive] = useState(false)
	const [patchTalonActive, setPatchTalonActive] = useState(false)
	const [createTalon, { isLoading: isCreateLoading }] = useCreateTalonMutation()
	const [patchTalon, { isLoading: isPatchLoading }] = usePatchTalonMutation()

	const onCreateTalon = async (payload: TalonPayload) => {
		await createTalon({
			...payload,
			facilityId: objectId
		})
		setCreateTalonActive(false)
	}
	const onPatchTalon = async (payload: TalonPayload) => {
		await patchTalon({
			...payload,
			ticketId: selectedTalon!.id,
			message: "",
			status: TalonStatus.PENDING
		})
		setPatchTalonActive(false)
	}
	const onPatchTalonClick = (talon: Talon) => {
		setSelectedTalon(talon)
		setPatchTalonActive(true)
	}
	const getPatchTalonInitialState= (talon: Talon) => {
		const { date, id, excelUrl: excel, message, status, ...payload } = talon
		return payload
	}

	return (
		<GroupLayout
			title="Список талонов"
			btns={ <SimpleButton
				onClick={() => setCreateTalonActive(true)}
				disabled={createNewDisabled}
				text="Создать новый +"
			/> }
			subLayout
		>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<TalonForm
					btnContent="Создать талон"
					btnOnClick={onCreateTalon}
					btnLoading={isCreateLoading}
					active={createTalonActive}
					setActive={setCreateTalonActive}
					wastes={wastes}
				/>
				{ talons.map(talon =>
					<TalonCard talon={talon} key={talon.id}>
						{ ( talon.status === TalonStatus.REJECTED ) && <SimpleButton
							text="Редактировать данные ✎"
							onClick={() => onPatchTalonClick(talon)}
						/> }
					</TalonCard>
				) }
				<TalonForm
					btnContent="Отправить"
					btnOnClick={onPatchTalon}
					btnLoading={isPatchLoading}
					active={patchTalonActive}
					setActive={setPatchTalonActive}
					wastes={wastes}
					error={selectedTalon?.message}
					initialState={selectedTalon ? getPatchTalonInitialState(selectedTalon) : undefined}
				/>
			</div>
		</GroupLayout>
	)
}

export default Talons