import GroupLayout from "app/components/GroupLayout"
import SimpleButton from "app/components/SimpleButton"
import UserCard from "app/components/UserCard"
import { useCreateTemporaryUserMutation } from "lib/api/user/index.mutation"
import { useState } from "react"
import { TemporaryUserPayload, UserWithPermission } from "types/user"
import CreateNewTemp from "../CreateNewTemp"


const Temporary: React.FC<{ users: UserWithPermission[] }> = ({
	users
}) => {

	const [createActive, setCreateActive] = useState(false)
	const [createUser, { isLoading }] = useCreateTemporaryUserMutation()

	const createNew = async (payload: TemporaryUserPayload) => {
		await createUser(payload)
		setCreateActive(false)
	}

	return (
		<>
			<GroupLayout
				title="Список временных аккаунтов"
				btns={ <SimpleButton
					onClick={() => setCreateActive(true)}
					text="Создать новый +"
				/> }>
				<div style={{ display: "flex", flexWrap: "wrap" }}>
					{ users.map(user =>
						<UserCard user={user} key={user.id} />
					) }
				</div>
			</GroupLayout>
			<CreateNewTemp
				active={createActive}
				setActive={setCreateActive}
				onSubmit={createNew}
				loading={isLoading}
			/>
		</>
	)
}

export default Temporary