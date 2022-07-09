import { Report } from "types/report"
import s from "./index.module.scss"

interface Props {
	report: Report
}

const ReportCard: React.FC<Props> = ({
	report
}) => {

	return (
		<div className={s.wrapper}>
			{ report.id }
		</div>
	)

}

export default ReportCard