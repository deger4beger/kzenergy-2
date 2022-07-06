import { ObjectDataPayload } from "types/object"
import { TalonPayload } from "types/talon"
import { objectApi } from "."

const extendedObjectApi = objectApi.injectEndpoints({
	endpoints: (build) => ({
		createObject: build.mutation<void, ObjectDataPayload>({
			query: (body) => ({
				url: "/",
				method: "post",
				data: body
			}),
			invalidatesTags: result => ["Object"]
		}),
		deleteObject: build.mutation<void, string>({
			query: (id) => ({
				url: `/${id}`,
				method: "delete",
			}),
			invalidatesTags: result => ["Object"]
		}),
		createTalon: build.mutation<void, TalonPayload & { facilityId: string }>({
			query: (body) => ({
				url: "/ticket/",
				method: "post",
				data: body
			}),
			invalidatesTags: result => ["ObjectInfo"]
		}),
	})
})

export const {
	useCreateObjectMutation, useDeleteObjectMutation,
	useCreateTalonMutation
} = extendedObjectApi