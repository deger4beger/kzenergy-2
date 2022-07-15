import React, { ReactElement, useMemo } from "react"
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

	const facilities = useMemo(() =>
		report.tickets.reduce((facilityList, ticket) => {
			if (!facilityList.includes(ticket.facilityName)) {
				facilityList.push(ticket.facilityName)
			}
			return facilityList
		}, [] as string[])
	, [report])

	return (
		<table className={s.wrapper}>
			<thead className={s.columns}>
				<tr>
					{ columns.map(column =>
						<th className={s.column} key={column}>
							{ column }
						</th>
					) }
				</tr>
			</thead>
			<tbody>
				{ facilities.map(facility => {
					const tickets = report.tickets.filter(ticket => ticket.facilityName === facility)
					return ([
						<tr>
							<th rowSpan={tickets.length}>
								{ facility }
							</th>
							<TicketRow tickets={tickets.slice(0, 1)} />
						</tr>,
						<tr>
							<TicketRow tickets={tickets.slice(1)} />
						</tr>
					] ) }
				) }
			</tbody>
		</table>
	)
}

const TicketRow: React.FC<Pick<SummaryReport, "tickets">> = ({
	tickets
}): any => tickets.map(ticket =>
	[
		<td>
			{ ticket.wasteName }
		</td>,
		<td>
			{ ticket.aggregateState }
		</td>,
		<td>
			{ ticket.quantityByMeasureSystem.тонна }
		</td>,
		<td>
			{ ticket.quantityByMeasureSystem.м3 }
		</td>,
		<td>
			{ ticket.quantityByMeasureSystem.штука }
		</td>,
		<td>
			{ ticket.quantityByDestinationType.Захоронение }
		</td>,
		<td>
			{ ticket.quantityByDestinationType.Утилизация }
		</td>,
		<td>
			{ ticket.quantityByDestinationType.Переработка }
		</td>,
		<td>
			{ ticket.quantityByDestinationType["Передача подрядческой организации"] }
		</td>,
		<td>
			{ ticket.quantityByDestinationType["Повторное использование"] }
		</td>,
		<td>
			{ ticket.message }
		</td>,
		<td>
			{ ticket.date }
		</td>
	]
)

export default SummaryReportView