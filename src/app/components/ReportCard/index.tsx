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
			<div className={s.left}>
				{ report.facilityName && <div className={s.facility}>
					{ report.facilityName }:
				</div> }
				{ report.date } - { report.user.fullname }
			</div>
		</div>
	)

}

export default ReportCard