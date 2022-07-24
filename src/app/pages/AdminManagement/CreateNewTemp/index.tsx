import Button from "app/components/Button"
import Checkbox from "app/components/Checkbox"
import Dropdown from "app/components/Dropdown"
import Input from "app/components/Input"
import Modal from "app/components/Modal"
import { useState } from "react"
import { TemporaryUserPayload, UserRoles } from "types/user"

interface Props {
	onSubmit: (payload: TemporaryUserPayload) => void,
	active: boolean,
	setActive: (active: boolean) => void
	loading?: boolean
}

const CreateNewTemp: React.FC<Props> = ({
	onSubmit,
	active,
	setActive,
	loading
}) => {

	const [formData, setFormData] = useState<TemporaryUserPayload>({
		role: "" as UserRoles,
		email: "",
		write: false
	})

	return (
		<Modal
			active={active}
			setActive={setActive}
			title="Создание временного аккаунта"
		>
			<div>
				<Input
					name="Email пользователя"
					onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
					placeholder="Email"
					type="email"
					value={formData.email}
				/>
				<Dropdown
					title="Роль пользователя"
					selected={formData.role}
					setSelected={(role) => setFormData(prev => ({ ...prev, role: role as UserRoles }))}
					options={Object.values(UserRoles)}
				/>
				<Checkbox
					active={formData.write}
					onToggle={() => setFormData(prev => ({ ...prev, write: !prev.write }))}
					text="Возможность редактирования данных"
				/>
				<Button
					content="Создать аккаунт"
					onClick={() => onSubmit(formData)}
					disabled={!formData.email || !formData.role}
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

export default CreateNewTemp