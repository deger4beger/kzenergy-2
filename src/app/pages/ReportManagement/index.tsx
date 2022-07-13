import GroupLayout from "app/components/GroupLayout"
import Preloader from "app/components/Preloader"
import SimpleButton from "app/components/SimpleButton"
import { useCreateSummaryReportMutation } from "lib/api/object/index.mutation"
import { useGetObjectsInfoQuery } from "lib/api/object/index.query"
import Reports from "./Reports"
import Talons from "./Talons"


const ReportManagement = () => {

	const { data, isLoading: getObjectsLoading } = useGetObjectsInfoQuery()
	const [createSummaryReport, { isLoading: createRepLoading }] = useCreateSummaryReportMutation()
	const loading = getObjectsLoading || !data

	const onCreateSummaryReport = () => {
		createSummaryReport()
	}

	return (
		<>
			<GroupLayout title="Список талонов">
				<div>
					{ ( loading ) ? <Preloader /> : <Talons tickets={ data.tickets } /> }
				</div>
			</GroupLayout>
			<GroupLayout title="Список отчетов" btns={
				<SimpleButton
					text="Создать сводный отчет +"
					disabled={ ( data?.facilityNumber !== data?.reports.length ) || createRepLoading }
					onClick={ onCreateSummaryReport }
				/>
			}>
				<div style={{ marginTop: "16px" }}>
					{ ( loading ) ? <div /> : <Reports reports={ data.reports } /> }
				</div>
			</GroupLayout>
		</>
	)
}

export default ReportManagement