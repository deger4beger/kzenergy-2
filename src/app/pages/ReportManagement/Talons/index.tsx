import GroupLayout from "app/components/GroupLayout"
import SimpleButton from "app/components/SimpleButton"
import TalonCard from "app/components/TalonCard"
import { usePatchTalonMutation } from "lib/api/object/index.mutation"
import React, { useState } from "react"
import { ObjectsTotalInfo } from "types/object"
import { PatchTalonStatusPayload, Talon, TalonStatus } from "types/talon"
import ChangeStatus from "./ChangeStatus"

const Talons: React.FC<Pick<ObjectsTotalInfo, "tickets">> = React.memo(({
	tickets: talons
}) => {

	const [selectedTalonId, setSelectedTalonId] = useState<string>("")
	const [changeStatusActive, setChangeStatusActive] = useState(false)
	const [ patchTalon, { isLoading } ] = usePatchTalonMutation()

	const onChangeStatus = async (payload: PatchTalonStatusPayload) => {
		await patchTalon({
			...payload,
			ticketId: selectedTalonId
		})
		setChangeStatusActive(false)
	}

	const onChangeStatusClick = (talonId: string) => {
		setSelectedTalonId(talonId)
		setChangeStatusActive(true)
	}

	return (
		<>
			{ Object.keys(talons).map(objectName =>
				<GroupLayout title={ objectName } key={ objectName } subLayout>
					<>
						{ talons[objectName].map(talon =>
							<TalonCard talon={talon} key={ talon.id }>
								{ ( talon.status === TalonStatus.PENDING ) && <SimpleButton
									text="Сменить статус ✎"
									onClick={() => onChangeStatusClick(talon.id)}
								/> }
							</TalonCard>
						) }
					</>
				</GroupLayout>
			) }
			<ChangeStatus
				active={changeStatusActive}
				setActive={setChangeStatusActive}
				btnLoading={isLoading}
				btnOnClick={onChangeStatus}
			/>
		</>
	)
})

export default Talons