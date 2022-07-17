import GroupLayout from "app/components/GroupLayout"
import ReportCard from "app/components/ReportCard"
import SimpleButton from "app/components/SimpleButton"
import { useCreateReportMutation } from "lib/api/object/index.mutation"
import { useState } from "react"
import { Report } from "types/report"
import { Talon, TalonStatus } from "types/talon"
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
				disabled={!!report || !tickets.some(ticket => ticket.status === TalonStatus.ACCEPTED)}
				text="Создать новый +"
			/> }
			subLayout
		>
			<div style={{ marginBottom: "100px" }}>
				<ReportForm
					active={createReportActive}
					setActive={setCreateReportActive}
					createReport={onCreateReport}
					tickets={tickets}
					loading={isLoading}
				/>
				{ report && <ReportCard report={report} /> }
			</div>
		</GroupLayout>
	)
}

export default Reports