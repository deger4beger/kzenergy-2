import { WasteQantity } from "types/waste"
import { statApi } from "."

const extendedStatApi = statApi.injectEndpoints({
	endpoints: (build) => ({
		getWasteStat: build.query<WasteQantity[], void>({
			query: () => ({
				url: "/waste/",
				method: "get"
			}),
			providesTags: result => ["Waste"]
		})
	})
})

export const {
	useGetWasteStatQuery
} = extendedStatApi