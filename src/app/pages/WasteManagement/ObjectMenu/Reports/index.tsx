import GroupLayout from "app/components/GroupLayout"
import SimpleButton from "app/components/SimpleButton"
import s from "./index.module.scss"

const Reports: React.FC = () => {

	const createReport = () => {
		console.log("1")
	}

	return (
		<GroupLayout
			title="Список отчетов"
			btns={ <SimpleButton
				onClick={createReport}
				text="Создать новый +"
			/> }
			subLayout
		>
			<div style={{ display: "flex" }}>

			</div>
		</GroupLayout>
	)
}

export default Reports