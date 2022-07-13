import { SummaryReport } from "types/report"
import { archiveApi } from "."

const extendedArchiveApi = archiveApi.injectEndpoints({
	endpoints: (build) => ({
		getSummaryReports: build.query<SummaryReport[], void>({
			query: () => ({
				url: "/summary/",
				method: "get"
			}),
			providesTags: result => ["SummaryReport"]
		})
	})
})

export const {
	useGetSummaryReportsQuery
} = extendedArchiveApi