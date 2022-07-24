import Button from "app/components/Button"
import Checkbox from "app/components/Checkbox"
import Modal from "app/components/Modal"
import { useState } from "react"
import { PermissionPayload, UserWithPermission } from "types/user"

interface Props {
	onSubmit: (data: PermissionPayload) => void,
	active: boolean,
	setActive: (active: boolean) => void
	loading?: boolean,
	user: UserWithPermission
}

const ChangePermission: React.FC<Props> = ({
	onSubmit,
	active,
	setActive,
	loading,
	user
}) => {

	const [formData, setFormData] = useState<PermissionPayload>({
		write: user.permission.write,
		read: user.permission.read
	})

	return (
		<Modal
			active={active}
			setActive={setActive}
			title={"Уровень доступа пользователя " + user.email}
		>
			<div>
				<Checkbox
					active={formData.read}
					onToggle={() => setFormData(prev => ({ ...prev, read: !prev.read }))}
					text="Возможность чтения данных"
				/>
				<Checkbox
					active={formData.write}
					onToggle={() => setFormData(prev => ({ ...prev, write: !prev.write }))}
					text="Возможность редактирования данных"
				/>
				<Button
					content="Подтвердить"
					onClick={() => onSubmit(formData)}
					loading={loading}
					type="dark"
					styles={{
						borderRadius: "20px",
						marginTop: "30px"
					}}
				/>
			</div>
		</Modal>
	)
}

export default ChangePermission