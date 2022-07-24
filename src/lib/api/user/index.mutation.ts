import { PermissionPayload, TemporaryUserPayload } from "types/user"
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
		patchPermission: build.mutation<void, PermissionPayload & { userId: string }>({
			query: ({ userId, ...body }) => ({
				url: `/${userId}/`,
				method: "patch",
				data: body
			}),
			invalidatesTags: result => ["User"]
		}),
		deleteUser: build.mutation<void, string>({
			query: (userId) => ({
				url: `/${userId}/`,
				method: "delete"
			}),
			invalidatesTags: result => ["User"]
		}),
	})
})

export const {
	useCreateTemporaryUserMutation, usePatchPermissionMutation,
	useDeleteUserMutation
} = extendedUserApi