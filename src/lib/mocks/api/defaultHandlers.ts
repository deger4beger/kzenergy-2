import { rest } from "msw"

const errorMsg = "Error happened"
const httpRequestTypes = ["get", "post", "patch", "put", "delete"]

export const defaultHandlers = httpRequestTypes.map(type => {
	return rest[type]("*", (req, res, ctx) => res(ctx.status(200), ctx.json({})))
})

export const defaultErrorHandlers = httpRequestTypes.map(type => {
	return rest[type]("*", (req, res, ctx) => res.networkError(errorMsg))
})