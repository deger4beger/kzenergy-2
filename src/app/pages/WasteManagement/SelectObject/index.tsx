import GroupLayout from "app/components/GroupLayout"
import ObjectCard from "app/components/ObjectCard"
import Preloader from "app/components/Preloader"
import { ObjectData } from "types/object"

interface Props {
	objects: undefined | ObjectData[]
	loading: boolean
}

const SelectObject: React.FC<Props> = ({
	objects,
	loading
}) => {

	return (
		<GroupLayout title="Выберите объект">
			<div style={{display: "flex", flexWrap: "wrap"}}>
				{ objects?.map(object =>
					<ObjectCard
						key={object.name}
						{...object}
						onObjClick={() => console.log(object.id)}
					/>
				) }
				{ loading && <Preloader /> }
			</div>
		</GroupLayout>
	)

}

export default SelectObject