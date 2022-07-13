import ArchiveCard from "app/components/ArchiveCard"
import GroupLayout from "app/components/GroupLayout"
import Preloader from "app/components/Preloader"
import { useGetSummaryReportsQuery } from "lib/api/archive/index.query"


const Archive = () => {

	const { data, isLoading } = useGetSummaryReportsQuery()
	console.log(data)

	return (
		( !isLoading && !!data ) ? <GroupLayout
			title="Архив сводных отчетов"
		>
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				{ data.map((el, index) =>
					<ArchiveCard
						key={ el.id }
						id={ ++index }
						date={ el.date }
						user={ el.user.fullname }
					/>
				) }
			</div>
		</GroupLayout> : <Preloader />
	)
}

export default Archive