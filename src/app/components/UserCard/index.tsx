import React from "react"
import { UserWithPermission } from "types/user"
import s from "./index.module.scss"

interface Props {
	user: UserWithPermission
}

const UserCard: React.FC<Props> = ({
	user
}) => {
	return (
		<div className={s.wrapper}>
			{ user.email }
		</div>
	)
}

export default UserCard