import Button from "app/components/Button"
import Modal from "app/components/Modal"
import TalonCardMini from "app/components/TalonCardMini"
import React from "react"
import { Talon, TalonStatus } from "types/talon"

interface Props {
	active: boolean
	setActive: (active: boolean) => void
	tickets: Talon[]
	createReport: () => void
	loading: boolean
}

const ReportForm: React.FC<Props> = ({
	active,
	setActive,
	tickets,
	createReport,
	loading
}) => {

	const titleStyles = {
		fontWeight: "500",
		marginBottom: "4px",
		textDecoration: "underline"
	}

	return (
		<Modal
			active={active}
			setActive={setActive}
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
				loading={loading}
				styles={{
					borderRadius: "20px",
					marginTop: "30px"
				}}
			/>
		</Modal>
	)

}

export default ReportForm