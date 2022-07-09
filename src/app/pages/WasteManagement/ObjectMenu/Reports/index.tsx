import GroupLayout from "app/components/GroupLayout"
import SimpleButton from "app/components/SimpleButton"
import { useState } from "react"
import { Report } from "types/report"
import { Talon } from "types/talon"
import ReportForm from "../ReportForm"

interface Props {
	report: Report | null
	tickets: Talon[]
}

const Reports: React.FC<Props> = ({
	report,
	tickets
}) => {

	const [createReportActive, setCreateReportActive] = useState(false)
	console.log(report)
	const createReport = () => {
		console.log("1")
	}

	return (
		<GroupLayout
			title="Список отчетов"
			btns={ <SimpleButton
				onClick={() => setCreateReportActive(true)}
				text="Создать новый +"
			/> }
			subLayout
		>
			<>
				<ReportForm
					active={createReportActive}
					setActive={setCreateReportActive}
					createReport={createReport}
					tickets={tickets}
				/>
			</>
		</GroupLayout>
	)
}

export default Reports