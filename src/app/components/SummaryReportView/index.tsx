import React, { useMemo } from "react"
import { SummaryReport } from "types/report"
import s from "./index.module.scss"

const SummaryReportView: React.FC<{
	report: SummaryReport
}> = ({
	report
}) => {

	const columns = useMemo(() => [
		"Объект",
		"Название отхода",
		"Агрегатное состояние",
		"Количество в тоннах",
		"Количество в м3",
		"Количество в штуках",
		"Захоронено",
		"Утилизировано",
  	"Переработанно",
  	"Передано подрядческой организации",
 		"Повторно использовано",
 		"Комментарий",
 		"Дата"
	], [])

	return (
		<div className={s.wrapper}>
			<div className={s.columns}>
				{ columns.map(column =>
					<div className={s.column} key={column}>
						{ column }
					</div>
				) }
			</div>
		</div>
	)
}

export default SummaryReportView