import { userApi } from "."

const extendedUserApi = userApi.injectEndpoints({
	endpoints: (build) => ({
		// getSummaryReports: build.query<SummaryReport[], void>({
		// 	query: () => ({
		// 		url: "/summary/",
		// 		method: "get"
		// 	}),
		// 	providesTags: result => ["SummaryReport"]
		// })
	})
})

export const {

} = extendedUserApi