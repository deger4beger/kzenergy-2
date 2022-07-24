import React from "react"
import { UserWithPermission } from "types/user"
import s from "./index.module.scss"

interface Props {
	user: UserWithPermission
}

const UserCard: React.FC<Props> = ({
	user
}) => {

	const onDelete = () => {

	}

	return (
		<div className={s.wrapper}>
			<div className={s.role}>{ user.role }</div>
			<div className={s.email}>{ user.email }</div>
		</div>
	)
}

export default UserCard