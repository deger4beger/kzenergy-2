import { useGetSummaryReportsQuery } from "lib/api/archive/index.query"


const Archive = () => {

	const { data, isLoading } = useGetSummaryReportsQuery()
	console.log(data)

	return (
		<div>
			Archive
		</div>
	)
}

export default Archive