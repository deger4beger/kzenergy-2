import { ObjectData } from "types/object"
import { objectApi } from "."

const extendedObjectApi = objectApi.injectEndpoints({
	endpoints: (build) => ({
		getAllObjects: build.query<ObjectData[], void>({
			query: () => ({
				url: "/",
				method: "get"
			}),
			providesTags: result => ["Object"]
		})
	})
})

export const { useGetAllObjectsQuery } = extendedObjectApi