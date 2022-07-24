import GroupLayout from "app/components/GroupLayout"
import SimpleButton from "app/components/SimpleButton"
import { useState } from "react"
import { TemporaryUserPayload } from "types/user"
import CreateNewTemp from "../CreateNewTemp"


const Temporary = () => {

	const [createActive, setCreateActive] = useState(false)

	const createNew = (payload: TemporaryUserPayload) => {
		console.log(payload)
	}

	return (
		<>
			<GroupLayout
				title="Список временных аккаунтов"
				btns={ <SimpleButton
					onClick={() => setCreateActive(true)}
					text="Создать новый +"
				/> }>
				<div style={{ marginTop: "10px" }}>
					Accounts
				</div>
			</GroupLayout>
			<CreateNewTemp
				active={createActive}
				setActive={setCreateActive}
				onSubmit={createNew}
			/>
		</>
	)
}

export default Temporary