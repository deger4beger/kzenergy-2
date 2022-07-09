import Button from "app/components/Button"
import GroupLayout from "app/components/GroupLayout"
import Modal from "app/components/Modal"
import SimpleButton from "app/components/SimpleButton"
import TalonCardMini from "app/components/TalonCardMini"
import { useState } from "react"
import { Report } from "types/report"
import { Talon, TalonStatus } from "types/talon"
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

	const titleStyles = {
		fontWeight: "500",
		marginBottom: "4px",
		textDecoration: "underline"
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
				<div style={{
					...titleStyles,
				}}>
					Создать отчет из талонов:
				</div>
				{ tickets
						.filter(talon => talon.status === TalonStatus.ACCEPTED)
						.map(talon =>
							<TalonCardMini
								key={talon.id}
								talon={talon}
							/>
				) }
				{ tickets.some(talon => talon.status !== TalonStatus.ACCEPTED) && <div>
					<div style={{
						...titleStyles,
						marginTop: "10px"
					}}>
						Следующие талоны не будут использованы в отчете:
					</div>
					{ tickets
							.filter(talon => talon.status !== TalonStatus.ACCEPTED)
							.map(talon =>
								<TalonCardMini
									key={talon.id}
									talon={talon}
								/>
					) }
				</div> }
				<Button
					content="Создать отчет"
					onClick={createReport}
					disabled={false}
					loading={false}
					styles={{
						borderRadius: "20px",
						marginTop: "30px"
					}}
				/>
			</Modal>
			</>
		</GroupLayout>
	)
}

export default Reports