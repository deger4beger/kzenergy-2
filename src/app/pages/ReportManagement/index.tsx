import GroupLayout from "app/components/GroupLayout"
import Preloader from "app/components/Preloader"
import { useGetObjectsInfoQuery } from "lib/api/object/index.query"
import Reports from "./Reports"
import Talons from "./Talons"


const ReportManagement = () => {

	const { data, isLoading } = useGetObjectsInfoQuery()
	const loading = isLoading || !data

	return (
		<>
			<GroupLayout title="Список талонов">
				<div>
					{ ( loading ) ? <Preloader /> : <Talons tickets={ data.tickets } /> }
				</div>
			</GroupLayout>
			<GroupLayout title="Список отчетов">
				<div style={{ marginTop: "16px" }}>
					{ ( loading ) ? <Preloader /> : <Reports reports={ data.reports } /> }
				</div>
			</GroupLayout>
		</>
	)
}

export default ReportManagement