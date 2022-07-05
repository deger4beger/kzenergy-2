import { ObjectData, ObjectTotalInfo } from "types/object"
import { objectApi } from "."

const extendedObjectApi = objectApi.injectEndpoints({
	endpoints: (build) => ({
		getAllObjects: build.query<ObjectData[], void>({
			query: () => ({
				url: "/",
				method: "get"
			}),
			providesTags: result => ["Object"]
		}),
		getObjectInfo: build.query<ObjectTotalInfo, string>({
			query: (facilityId: string) => ({
				url: `/${facilityId}`,
				method: "get"
			}),
			providesTags: result => ["ObjectInfo"]
		})
	})
})

export const { useGetAllObjectsQuery, useGetObjectInfoQuery } = extendedObjectApi