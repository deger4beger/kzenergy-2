import React from "react"
import { TalonStatus } from "types/talon"
import s from "./index.module.scss"
import cn from "classnames"


interface Props {
	status?: TalonStatus
}

const StatusIcon: React.FC<Props> = ({
	status
}) => {
	return (
		<div className={cn(s.statusIcon, {
				[s.pos]: status === TalonStatus.ACCEPTED,
				[s.neg]: status === TalonStatus.REJECTED,
				[s.neut]: !status
			})}>
			<div className={s.inner} />
		</div>
	)
}

export default StatusIcon