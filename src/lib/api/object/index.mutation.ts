import { ObjectDataPayload } from "types/object"
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
		})
	})
})

export const { useCreateObjectMutation, useDeleteObjectMutation } = extendedObjectApi