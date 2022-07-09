import GroupLayout from "app/components/GroupLayout"
import SimpleButton from "app/components/SimpleButton"
import { useCreateReportMutation } from "lib/api/object/index.mutation"
import { useState } from "react"
import { Report } from "types/report"
import { Talon } from "types/talon"
import ReportForm from "../ReportForm"

interface Props {
	report: Report | null
	tickets: Talon[],
	objectId: string
}

const Reports: React.FC<Props> = ({
	report,
	tickets,
	objectId
}) => {

	const [createReportActive, setCreateReportActive] = useState(false)
	const [createReport, { isLoading }] = useCreateReportMutation()

	const onCreateReport = async () => {
		await createReport(objectId)
		setCreateReportActive(false)
	}

	return (
		<GroupLayout
			title="Список отчетов"
			btns={ <SimpleButton
				onClick={() => setCreateReportActive(true)}
				disabled={!!report}
				text="Создать новый +"
			/> }
			subLayout
		>
			<>
				<ReportForm
					active={createReportActive}
					setActive={setCreateReportActive}
					createReport={onCreateReport}
					tickets={tickets}
					loading={isLoading}
				/>
			</>
		</GroupLayout>
	)
}

export default Reports