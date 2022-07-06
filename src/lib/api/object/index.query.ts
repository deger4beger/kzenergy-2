import { ObjectData, ObjectsTotalInfo, ObjectTotalInfo } from "types/object"
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
		}),
		getObjectsInfo: build.query<ObjectsTotalInfo, void>({
			query: () => ({
				url: "/total/",
				method: "get"
			}),
			providesTags: result => ["ObjectsInfo"]
		})
	})
})

export const {
	useGetAllObjectsQuery, useGetObjectInfoQuery,
	useGetObjectsInfoQuery
} = extendedObjectApi