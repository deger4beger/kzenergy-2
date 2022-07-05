import GroupLayout from "app/components/GroupLayout"
import SimpleButton from "app/components/SimpleButton"
import { useState } from "react"
import { TicketPayload } from "types/ticket"
import TalonForm from "../TalonForm"
import s from "./index.module.scss"

const Talons: React.FC = () => {

	const [createTalonActive, setCreateTalonActive] = useState(false)

	const createTalon = (payload: TicketPayload) => {
		console.log(payload)
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
			<div style={{ display: "flex" }}>
				<TalonForm
					btnContent="Создать талон"
					btnOnClick={createTalon}
					active={createTalonActive}
					setActive={setCreateTalonActive}
				/>
			</div>
		</GroupLayout>
	)
}

export default Talons