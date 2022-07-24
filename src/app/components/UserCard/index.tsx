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
			<div className={s.items}>
				<div className={s.item}>Email: { user.email }</div>
				{ user.permission.temporary && (
					<div className={s.item}>
						Пароль: { user.email.split("@")[0] }
					</div>
				) }
			</div>
		</div>
	)
}

export default UserCard