import GroupLayout from "app/components/GroupLayout"
import SimpleButton from "app/components/SimpleButton"
import { useCreateTalonMutation } from "lib/api/object/index.mutation"
import { useState } from "react"
import { Talon, TicketPayload } from "types/talon"
import TalonForm from "../TalonForm"
import s from "./index.module.scss"

interface Props {
	talons: Talon[]
	objectId: string
}

const Talons: React.FC<Props> = ({ talons, objectId }) => {

	const [createTalonActive, setCreateTalonActive] = useState(false)
	const [createTalon, { isLoading }] = useCreateTalonMutation()

	const onCreateTalon = async (payload: TicketPayload) => {
		await createTalon({
			...payload,
			facilityId: objectId
		})
		setCreateTalonActive(false)
	}

	return (
		<GroupLayout
			title="Список талонов"
			btns={ <SimpleButton
				onClick={() => setCreateTalonActive(true)}
				text="Создать новый +"
			/> }
			subLayout
		>
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				<TalonForm
					btnContent="Создать талон"
					btnOnClick={onCreateTalon}
					btnLoading={isLoading}
					active={createTalonActive}
					setActive={setCreateTalonActive}
				/>
			</div>
		</GroupLayout>
	)
}

export default Talons