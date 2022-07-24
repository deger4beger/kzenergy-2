import { AllUsersList } from "types/user"
import { userApi } from "."

const extendedUserApi = userApi.injectEndpoints({
	endpoints: (build) => ({
		getAllUsers: build.query<AllUsersList, void>({
			query: () => ({
				url: "/",
				method: "get"
			}),
			providesTags: result => ["User"]
		})
	})
})

export const {
	useGetAllUsersQuery
} = extendedUserApi