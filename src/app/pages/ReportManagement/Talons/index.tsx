import GroupLayout from "app/components/GroupLayout"
import SimpleButton from "app/components/SimpleButton"
import TalonCard from "app/components/TalonCard"
import { useState } from "react"
import { ObjectsTotalInfo } from "types/object"
import { PatchTalonStatusPayload, Talon, TalonStatus } from "types/talon"
import ChangeStatus from "./ChangeStatus"

const Talons: React.FC<Pick<ObjectsTotalInfo, "tickets">> = ({
	tickets: talons
}) => {

	const [selectedTalonId, setSelectedTalonId] = useState<string>("")
	const [changeStatusActive, setChangeStatusActive] = useState(false)

	const onChangeStatus = (payload: PatchTalonStatusPayload) => {
		console.log(payload, selectedTalonId)
	}

	const onChangeStatusClick = (talonId: string) => {
		setSelectedTalonId(talonId)
		setChangeStatusActive(true)
	}

	return (
		<>
			{ Object.keys(talons).map(objectName =>
				<GroupLayout title={ objectName } key={ objectName } subLayout>
					<div>
						{ talons[objectName].map(talon =>
							<TalonCard talon={talon} key={ talon.id }>
								{ ( talon.status === TalonStatus.PENDING ) && <SimpleButton
									text="Сменить статус ✎"
									onClick={() => onChangeStatusClick(talon.id)}
								/> }
							</TalonCard>
						) }
					</div>
				</GroupLayout>
			) }
			<ChangeStatus
				active={changeStatusActive}
				setActive={setChangeStatusActive}
				btnLoading={false}
				btnOnClick={onChangeStatus}
			/>
		</>
	)
}

export default Talons