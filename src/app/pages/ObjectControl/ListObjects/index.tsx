import s from "./index.module.scss"

const ListObjects = () => {

	const objects = [
		{
			name: "Название объекта",
			wastes: ["Отход номер один", "Отход номер два", "Отход номер три"]
		},
		{
			name: "Название объекта",
			wastes: ["Отход номер один", "Отход номер два", "Отход номер три"]
		},
		{
			name: "Название объекта",
			wastes: ["Отход номер один", "Отход номер два", "Отход номер три"]
		}
	]

	return (
		<div className={s.wrapper}>
			{ objects.map(object =>
				<div className={s.object}>
					{ object.name }
				</div>
			) }
		</div>
	)
}

export default ListObjects