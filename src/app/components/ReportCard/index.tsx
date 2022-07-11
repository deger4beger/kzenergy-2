import { useState } from "react"
import { Report } from "types/report"
import Modal from "../Modal"
import TalonCardMini from "../TalonCardMini"
import s from "./index.module.scss"

interface Props {
	report: Report
}

const ReportCard: React.FC<Props> = ({
	report
}) => {

	const [active, setActive] = useState(false)

	return (
		<div className={s.wrapper}>
			<div className={s.left}>
				{ report.facilityName && <div className={s.facility}>
					{ report.facilityName }:
				</div> }
				{ report.date } - { report.user.fullname }
			</div>
			<div className={s.right} onClick={() => setActive(true)}>
				Талонов: { report.tickets.length }
			</div>
			<Modal
				active={active}
				setActive={setActive}
				title={`Список талонов для отчета от ${report.date}`}
			>
				{ report.tickets.map(ticket =>
					<TalonCardMini
						talon={ticket}
						key={ticket.id}
					/>
				) }
			</Modal>
		</div>
	)

}

export default ReportCard