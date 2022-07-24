import GroupLayout from "app/components/GroupLayout"
import UserCard from "app/components/UserCard"
import { UserWithPermission } from "types/user"


const Permanent: React.FC<{ users: UserWithPermission[] }> = ({
	users
}) => {
	return (
		<GroupLayout
			title="Список постоянных аккаунтов">
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				{ users.map(user =>
					<UserCard user={user} key={user.id} />
				) }
			</div>
		</GroupLayout>
	)
}

export default Permanent