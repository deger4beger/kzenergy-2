import GroupLayout from "app/components/GroupLayout"
import Input from "app/components/Input"
import WasteCard from "app/components/WasteCard"
import { useGetWasteStatQuery } from "lib/api/stat/index.query"
import { useState } from "react"


const Waste = () => {

	const { data, isLoading } = useGetWasteStatQuery(undefined, {
		refetchOnMountOrArgChange: true
	})
	const [filter, setFilter] = useState("")

	if (isLoading) return <div />

	return (
		<GroupLayout
			title="Количество текущих отходов"
			btns={ <Input
				type="text"
				placeholder="Введите назание отхода"
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
				styles={{marginBottom: "0", marginRight: "20px", position: "relative", top: "6px"}}
			/> }
		>
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				{ data?.filter(waste => waste.name.toLowerCase().includes(filter)).map(waste =>
					<WasteCard waste={waste} key={waste.id} />
				) }
			</div>
		</GroupLayout>
	)

}

export default Waste