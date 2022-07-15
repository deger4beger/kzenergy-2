import React from "react"
import cn from "classnames"
import s from "./index.module.scss"

interface Props {
	id: string | number
	date: string
	user: string
	onClick: () => void
	blink?: boolean
}

const ArchiveCard: React.FC<Props> = ({
	id, date, user, onClick, blink
}) => {
	return (
		<div className={cn(s.wrapper, {
			[s.blink]: blink
		})} onClick={onClick}>
			<div className={s.title}>
				Сводный отчет № { id }
			</div>
			<div className={s.info}>
				<div className={s.infoItem}>
					<div className={s.infoTitle}>
						Дата:
					</div>
					<div className={s.infoText}>
						{ date }
					</div>
				</div>
				<div className={s.infoItem}>
					<div className={s.infoTitle}>
						От пользователя:
					</div>
					<div className={s.infoText}>
						{ user }
					</div>
				</div>
			</div>
		</div>
	)
}

export default ArchiveCard