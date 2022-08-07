import { Talon } from "types/talon"
import { statApi } from "."

const extendedStatApi = statApi.injectEndpoints({
	endpoints: (build) => ({
		patchWasteLimit: build.mutation<void, Pick<Talon, "wasteName" | "quantity">>({
			query: (body) => ({
				url: "/waste/",
				method: "patch",
				data: body
			}),
			invalidatesTags: result => ["Waste"]
		})
	})
})

export const {
	usePatchWasteLimitMutation
} = extendedStatApi