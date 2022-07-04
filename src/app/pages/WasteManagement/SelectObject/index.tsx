import GroupLayout from "app/components/GroupLayout"
import ObjectCard from "app/components/ObjectCard"
import Preloader from "app/components/Preloader"
import { ObjectData } from "types/object"

interface Props {
	objects: undefined | ObjectData[]
	onObjectClick: (object: ObjectData) => void
	loading: boolean
}

const SelectObject: React.FC<Props> = ({
	objects,
	onObjectClick,
	loading
}) => {

	return (
		<GroupLayout title="Выберите объект">
			<div style={{display: "flex", flexWrap: "wrap"}}>
				{ objects?.map(object =>
					<ObjectCard
						key={object.name}
						{...object}
						onObjClick={() => onObjectClick(object)}
					/>
				) }
				{ loading && <Preloader /> }
			</div>
		</GroupLayout>
	)

}

export default SelectObject