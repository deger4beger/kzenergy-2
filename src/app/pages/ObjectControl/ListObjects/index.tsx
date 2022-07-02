import ObjectCard from "app/components/ObjectCard"
import s from "./index.module.scss"

const ListObjects = () => {

	const objects = [
		{
			name: "КПК",
			wastes: ["Отход номер один", "Отход номер два", "Отход номер три"]
		},
		{
			name: "УКПГ-1",
			wastes: ["Отход номер один", "Отход номер два", "Отход номер три"]
		},
		{
			name: "УКПГ-2",
			wastes: ["Отход номер один", "Отход номер два", "Отход номер три"]
		},
		{
			name: "Скважины",
			wastes: ["Отход номер один", "Отход номер два", "Отход номер три"]
		}
	]

	return (
		<div className={s.wrapper}>
			{ objects.map(object =>
				<ObjectCard
					key={object.name}
					{...object}
				/>
			) }
		</div>
	)
}

export default ListObjects