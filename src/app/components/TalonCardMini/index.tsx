import React from "react"
import { Talon } from "types/talon"


interface Props {
	talon: Talon
}

const TalonCardMini: React.FC<Props> = ({
	talon
}) => {
	return (
		<div>
			{ talon.wasteName }
		</div>
	)
}

export default TalonCardMini