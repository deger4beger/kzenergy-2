import GroupLayout from "app/components/GroupLayout"
import SimpleButton from "app/components/SimpleButton"
import { Report } from "types/report"
import s from "./index.module.scss"

interface Props {
	report: Report | null
}

const Reports: React.FC<Props> = ({
	report
}) => {

	const createReport = () => {
		console.log("1")
	}
	console.log(report)

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