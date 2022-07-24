import GroupLayout from "app/components/GroupLayout"
import SimpleButton from "app/components/SimpleButton"
import UserCard from "app/components/UserCard"
import { useState } from "react"
import { TemporaryUserPayload, UserWithPermission } from "types/user"
import CreateNewTemp from "../CreateNewTemp"


const Temporary: React.FC<{ users: UserWithPermission[] }> = ({
	users
}) => {

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
					{ users.map(user =>
						<UserCard user={user} key={user.id} />
					) }
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