import { ObjectData } from "types/object"
import { objectApi } from "."

const extendedObjectApi = objectApi.injectEndpoints({
	endpoints: (build) => ({
		getAllDialogs: build.query<ObjectData[], void>({
			query: () => ({
				url: "/facility/",
				method: "get"
			}),
			providesTags: result => ["Object"]
		})
	})
})

export const { useGetAllDialogsQuery } = extendedObjectApi