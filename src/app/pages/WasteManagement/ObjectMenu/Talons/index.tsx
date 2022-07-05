import GroupLayout from "app/components/GroupLayout"
import SimpleButton from "app/components/SimpleButton"
import s from "./index.module.scss"

const Talons: React.FC = () => {

	const createTalon = () => {
		console.log("1")
	}

	return (
		<GroupLayout
			title="Список талонов"
			btns={ <SimpleButton
				onClick={createTalon}
				text="Создать новый +"
			/> }
			subLayout
		>
			<div style={{ display: "flex" }}>

			</div>
		</GroupLayout>
	)
}

export default Talons