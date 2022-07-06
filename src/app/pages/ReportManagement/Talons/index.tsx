import GroupLayout from "app/components/GroupLayout"
import TalonCard from "app/components/TalonCard"
import { ObjectsTotalInfo } from "types/object"

const Talons: React.FC<Pick<ObjectsTotalInfo, "tickets">> = ({
	tickets: talons
}) => {
	return (
		<>
			{ Object.keys(talons).map(objectName =>
				<GroupLayout title={ objectName } key={ objectName } subLayout>
					<div>
						{ talons[objectName].map(talon =>
							<TalonCard { ...talon } key={ talon.id } />
						) }
					</div>
				</GroupLayout>
			) }
		</>
	)
}

export default Talons