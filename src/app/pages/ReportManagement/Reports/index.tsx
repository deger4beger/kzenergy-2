import GroupLayout from "app/components/GroupLayout"
import SimpleButton from "app/components/SimpleButton"
import { Report } from "types/report"
import s from "./index.module.scss"

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