import { ObjectDataPayload } from "types/object"
import { Talon, TalonPayload } from "types/talon"
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
			invalidatesTags: result => ["ObjectInfo", "ObjectsInfo"]
		}),
		patchTalon: build.mutation<void, Partial<Talon> & { ticketId: string }>({
			query: ({ ticketId, ...body }) => ({
				url: `/ticket/${ticketId}`,
				method: "patch",
				data: body
			}),
			invalidatesTags: result => ["ObjectInfo", "ObjectsInfo"]
		}),
		createReport: build.mutation<void, string>({
			query: (facilityId) => ({
				url: `/${facilityId}/report/`,
				method: "post",
			}),
			invalidatesTags: result => ["ObjectInfo", "ObjectsInfo"]
		}),
		createSummaryReport: build.mutation<void, void>({
			query: () => ({
				url: "/summary/",
				method: "post",
			}),
			invalidatesTags: result => ["ObjectInfo", "ObjectsInfo"]
		}),
	})
})

export const {
	useCreateObjectMutation, useDeleteObjectMutation,
	useCreateTalonMutation, usePatchTalonMutation,
	useCreateReportMutation, useCreateSummaryReportMutation
} = extendedObjectApi