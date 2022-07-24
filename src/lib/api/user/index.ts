import { createApi } from "@reduxjs/toolkit/dist/query/react"
import { baseQuerySettings } from ".."

export const userApi = createApi({
    ...baseQuerySettings("/user"),
    reducerPath: "user/api",
    tagTypes: ["User"],
    endpoints: () => ({})
})