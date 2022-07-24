import GroupLayout from "app/components/GroupLayout"
import SimpleButton from "app/components/SimpleButton"
import { useState } from "react"
import CreateNewTemp from "../CreateNewTemp"


const Temporary = () => {

	const [createActive, setCreateActive] = useState(false)

	const createNew = () => {
		console.log(1)
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