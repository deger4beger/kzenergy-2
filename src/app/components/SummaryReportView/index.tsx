import React from "react"
import { SummaryReport } from "types/report"
import s from "./index.module.scss"

const SummaryReportView: React.FC<{
	report: SummaryReport
}> = ({
	report
}) => {
	return (
		<div className={s.wrapper}>
			{ report.id }
		</div>
	)
}

export default SummaryReportView