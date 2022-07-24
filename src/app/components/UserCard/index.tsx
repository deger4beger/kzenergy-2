import { useAppSelector } from "app/hooks/redux"
import cn from "classnames"
import ChangePermission from "app/pages/AdminManagement/ChangePermission"
import React, { useState } from "react"
import { PermissionPayload, UserWithPermission } from "types/user"
import Button from "../Button"
import Modal from "../Modal"
import s from "./index.module.scss"

interface Props {
	user: UserWithPermission
}

const UserCard: React.FC<Props> = ({
	user
}) => {

	const [menuActive, setMenuActive] = useState(false)
	const [changePermissionActive, setChangePermissionActive] = useState(false)
	const myId = useAppSelector(state => state.userReducer.userData.id)

	const onDelete = () => {

	}

	const onPatchPermission = (permission: PermissionPayload) => {

	}

	const toPatchPermission = () => {
		setMenuActive(false)
		setChangePermissionActive(true)
	}

	return (
		<>
			<div
				className={cn(s.wrapper, {
					[s.disabled]: myId === user.id
				})}
				onClick={() => setMenuActive(true)}
			>
				<div className={s.role}>{ user.role } { myId === user.id && "(Вы)" }</div>
				<div className={s.items}>
					<div className={s.item}><span>Email:</span> { user.email }</div>
					{ user.permission.temporary && (
						<div className={s.item}>
							<span>Пароль:</span> { user.email.split("@")[0] }
						</div>
					) }
				</div>
			</div>
			<Modal
				active={menuActive}
				setActive={setMenuActive}
				title={"Выберите опцию для пользователя " + user.email}
			>
				<Button
					content="Изменить уровень доступа"
					onClick={toPatchPermission}
					styles={{
						marginTop: "10px",
						borderRadius: "6px"
					}}
				/>
				{ user.permission.temporary && <Button
					content="Удалить аккаунт"
					onClick={() => void 0}
					styles={{
						marginTop: "20px",
						borderRadius: "6px"
					}}
				/> }
			</Modal>
			<ChangePermission
				active={changePermissionActive}
				setActive={setChangePermissionActive}
				onSubmit={onPatchPermission}
				user={user}
			/>
		</>
	)
}

export default UserCard