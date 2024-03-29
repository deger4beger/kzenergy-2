import React from "react"
import { Talon, TalonMini } from "types/talon"
import StatusIcon from "../StatusIcon"
import s from "./index.module.scss"


interface Props {
	talon: Talon | TalonMini
}

const TalonCardMini: React.FC<Props> = ({
	talon
}) => {
	return (
		<div className={s.wrapper}>
			<StatusIcon
				status={talon.status}
			/>
			<div className={s.title}>
				{ talon.wasteName } - { talon.date }
			</div>
		</div>
	)
}

export default TalonCardMini