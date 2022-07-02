import { ObjectDataPayload } from "types/object"
import { objectApi } from "."

const extendedObjectApi = objectApi.injectEndpoints({
	endpoints: (build) => ({
		createObject: build.mutation<void, ObjectDataPayload>({
			query: (body) => ({
				url: "/facility/",
				method: "post",
				body
			}),
			invalidatesTags: result => ["Object"]
		})
	})
})

export const { useCreateObjectMutation } = extendedObjectApi