import React, { ReactElement, useMemo } from "react"
import { SummaryReport } from "types/report"
import cn from "classnames"
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
							<TicketRow ticket={tickets[0]} />
						</tr>,
						tickets.slice(1).map(ticket =>
							<tr>
								<TicketRow ticket={ ticket } key={ ticket.id } />
							</tr>
						)
					] ) }
				) }
			</tbody>
			<tfoot>
				<tr>
					<th>Сумма</th>
					<td /><td />
					<td>{ report.total.тонна }</td>
					<td>{ report.total.м3 }</td>
					<td>{ report.total.штука }</td>
					<td>{ report.total.Захоронение }</td>
					<td>{ report.total.Утилизация }</td>
					<td>{ report.total.Переработка }</td>
					<td>{ report.total["Передача подрядческой организации"] }</td>
					<td>{ report.total["Повторное использование"] }</td>
					<td /><td />
				</tr>
			</tfoot>
		</table>
	)
}

const rowTicketData = (ticket: any) => [
	ticket.wasteName,
	ticket.aggregateState,
	ticket.quantityByMeasureSystem.тонна,
	ticket.quantityByMeasureSystem.м3,
	ticket.quantityByMeasureSystem.штука,
	ticket.quantityByDestinationType.Захоронение,
	ticket.quantityByDestinationType.Утилизация,
	ticket.quantityByDestinationType.Переработка,
	ticket.quantityByDestinationType["Передача подрядческой организации"],
	ticket.quantityByDestinationType["Повторное использование"]
]

const TicketRow: React.FC<{ ticket: any }> = ({
	ticket
}): any => [
	...rowTicketData(ticket).map(data =>
		<td className={cn({ [s.null]: !data })}>{ data }</td>
	),
	<td>{ ticket.message }</td>,
	<td>{ ticket.date }</td>
]

export default SummaryReportView