import { TemporaryUserPayload } from "types/user"
import { userApi } from "."


const extendedUserApi = userApi.injectEndpoints({
	endpoints: (build) => ({
		createTemporaryUser: build.mutation<void, TemporaryUserPayload>({
			query: (body) => ({
				url: "/temporary/",
				method: "post",
				data: body
			}),
			invalidatesTags: result => ["User"]
		}),
	})
})

export const {
	useCreateTemporaryUserMutation
} = extendedUserApi