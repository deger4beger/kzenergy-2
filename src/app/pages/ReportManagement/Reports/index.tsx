import ReportCard from "app/components/ReportCard"
import { Report } from "types/report"

interface Props {
	reports: Report[]
}

const Reports: React.FC<Props> = ({
	reports
}) => {

	return (
		<div style={{ marginBottom: "100px" }}>
			{ reports.map(report =>
				<ReportCard report={report} key={report.id} />
			) }
		</div>
	)
}

export default Reports