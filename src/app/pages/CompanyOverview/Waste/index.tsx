import GroupLayout from "app/components/GroupLayout"
import WasteCard from "app/components/WasteCard"
import { useGetWasteStatQuery } from "lib/api/stat/index.query"


const Waste = () => {

	const { data, isLoading } = useGetWasteStatQuery()

	if (isLoading) return <div />

	return (
		<GroupLayout
			title="Количество текущих отходов">
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				{ data?.map(waste =>
					<WasteCard waste={waste} />
				) }
			</div>
		</GroupLayout>
	)

}

export default Waste