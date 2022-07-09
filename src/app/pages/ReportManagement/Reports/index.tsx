import { Report } from "types/report"

interface Props {
	reports: Report[]
}

const Reports: React.FC<Props> = ({
	reports
}) => {

	console.log(reports)

	return (
		<>
			{ reports.map(report =>
				<div>{ report.id }</div>
			) }
		</>
	)
}

export default Reports