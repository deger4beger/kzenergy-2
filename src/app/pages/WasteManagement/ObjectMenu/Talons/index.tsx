import GroupLayout from "app/components/GroupLayout"
import SimpleButton from "app/components/SimpleButton"
import TalonCard from "app/components/TalonCard"
import { useCreateTalonMutation } from "lib/api/object/index.mutation"
import { useState } from "react"
import { WasteInfo } from "types/object"
import { Talon, TalonPayload } from "types/talon"
import TalonForm from "../TalonForm"
import s from "./index.module.scss"

interface Props {
	talons: Talon[]
	wastes: WasteInfo[]
	objectId: string
}

const Talons: React.FC<Props> = ({ talons, objectId, wastes }) => {

	const [createTalonActive, setCreateTalonActive] = useState(false)
	const [createTalon, { isLoading }] = useCreateTalonMutation()

	const onCreateTalon = async (payload: TalonPayload) => {
		await createTalon({
			...payload,
			facilityId: objectId
		})
		setCreateTalonActive(false)
	}

	return (
		<GroupLayout
			title="Список талонов"
			btns={ <SimpleButton
				onClick={() => setCreateTalonActive(true)}
				text="Создать новый +"
			/> }
			subLayout
		>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<TalonForm
					btnContent="Создать талон"
					btnOnClick={onCreateTalon}
					btnLoading={isLoading}
					active={createTalonActive}
					setActive={setCreateTalonActive}
					wastes={wastes}
				/>
				{ talons.map(talon =>
					<TalonCard talon={talon} key={talon.id} />
				) }
			</div>
		</GroupLayout>
	)
}

export default Talons