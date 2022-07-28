import { useAppSelector } from "app/hooks/redux"
import cn from "classnames"
import ChangePermission from "app/pages/AdminManagement/ChangePermission"
import React, { useState } from "react"
import { PermissionPayload, UserWithPermission } from "types/user"
import Button from "../Button"
import Modal from "../Modal"
import s from "./index.module.scss"
import { useDeleteUserMutation, usePatchPermissionMutation } from "lib/api/user/index.mutation"

interface Props {
	user: UserWithPermission
}

enum PermissionInfo {
	Blocked = "Заблокирован",
	Readonly = "Только чтение",
	Full = "Все права"
}

const UserCard: React.FC<Props> = ({
	user
}) => {

	const [menuActive, setMenuActive] = useState(false)
	const [changePermissionActive, setChangePermissionActive] = useState(false)
	const myId = useAppSelector(state => state.userReducer.userData.id)
	const [patchPermission, { isLoading: isPatchLoading }] = usePatchPermissionMutation()
	const [deleteUser, { isLoading: isDeleteLoading }] = useDeleteUserMutation()

	const onDelete = async () => {
		await deleteUser(user.id)
		setMenuActive(false)
	}

	const onPatchPermission = async (permission: PermissionPayload) => {
		await patchPermission({ ...permission, userId: user.id })
		setChangePermissionActive(false)
	}

	const toPatchPermission = () => {
		setMenuActive(false)
		setChangePermissionActive(true)
	}

	const getPermissionInfo = () => {
		const perm = user.permission
		if (perm.read) {
			if (perm.write) return PermissionInfo.Full
			if (!perm.write) return PermissionInfo.Readonly
		}
		return PermissionInfo.Blocked
	}

	return (
		<>
			<div
				className={cn(s.wrapper, {
					[s.disabled]: myId === user.id
				})}
				onClick={() => setMenuActive(true)}
			>
				<div className={s.role}>
					<div>
						{ user.role } { myId === user.id && "(Вы) " }
					</div>
					<div className={s.info}>
						{ getPermissionInfo() }
					</div>
				</div>
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
					loading={isDeleteLoading}
					onClick={onDelete}
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
				loading={isPatchLoading}
				user={user}
			/>
		</>
	)
}

export default UserCard