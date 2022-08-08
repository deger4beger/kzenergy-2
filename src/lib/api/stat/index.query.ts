import { RepStatByWaste, WasteQantity, WasteStatByRep } from "types/waste"
import { statApi } from "."

const extendedStatApi = statApi.injectEndpoints({
	endpoints: (build) => ({
		getWasteStat: build.query<WasteQantity[], void>({
			query: () => ({
				url: "/waste/",
				method: "get"
			}),
			providesTags: result => ["Waste"]
		}),
		getWasteStatByRep: build.query<WasteStatByRep, void>({
			query: () => ({
				url: "/lineplot/",
				method: "get"
			}),
			providesTags: result => ["Waste"]
		}),
		getRepStatByWaste: build.query<RepStatByWaste, void>({
			query: () => ({
				url: "/barplot/",
				method: "get"
			}),
			providesTags: result => ["Waste"]
		})
	})
})

export const {
	useGetWasteStatQuery, useGetWasteStatByRepQuery,
	useGetRepStatByWasteQuery
} = extendedStatApi