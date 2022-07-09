import GroupLayout from "app/components/GroupLayout"
import Modal from "app/components/Modal"
import SimpleButton from "app/components/SimpleButton"
import TalonCardMini from "app/components/TalonCardMini"
import { useState } from "react"
import { Report } from "types/report"
import { Talon } from "types/talon"
import s from "./index.module.scss"

interface Props {
	report: Report | null
	tickets: Talon[]
}

const Reports: React.FC<Props> = ({
	report,
	tickets
}) => {

	const [createReportActive, setCreateReportActive] = useState(false)

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
			<div style={{ display: "flex" }}>

			</div>
			<Modal
				active={createReportActive}
				setActive={setCreateReportActive}
				title="Создание отчета"
			>
				{ tickets.map(talon =>
					<TalonCardMini
						key={talon.id}
						talon={talon}
					/>
				) }
			</Modal>
			</>
		</GroupLayout>
	)
}

export default Reports