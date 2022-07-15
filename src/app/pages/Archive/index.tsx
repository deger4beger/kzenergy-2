import ArchiveCard from "app/components/ArchiveCard"
import GroupLayout from "app/components/GroupLayout"
import Preloader from "app/components/Preloader"
import SimpleButton from "app/components/SimpleButton"
import SummaryReportView from "app/components/SummaryReportView"
import { useGetSummaryReportsQuery } from "lib/api/archive/index.query"
import { useState } from "react"
import { SummaryReport } from "types/report"


const Archive = () => {

	const { data, isLoading } = useGetSummaryReportsQuery()
	const [selected, setSelected] = useState<undefined | SummaryReport>()

	if ( selected ) return <GroupLayout
		title={"Сводный отчет от " + selected.date}
		btns={ <SimpleButton
			text="← Назад"
			onClick={ () => setSelected(undefined) }
		/> }
	>
		<SummaryReportView report={ selected } />
	</GroupLayout>

	return (
		( !isLoading && !!data ) ? <GroupLayout
			title="Архив сводных отчетов"
		>
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				{ data.map((report, index) =>
					<ArchiveCard
						onClick={ () => setSelected(report) }
						key={ report.id }
						id={ data.length - index }
						date={ report.date }
						user={ report.user.fullname }
						blink={ index === 0 }
					/>
				) }
			</div>
		</GroupLayout> : <Preloader />
	)
}

export default Archive