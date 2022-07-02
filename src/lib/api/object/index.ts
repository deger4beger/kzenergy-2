import { createApi } from "@reduxjs/toolkit/dist/query/react"
import { baseQuerySettings } from ".."

export const objectApi = createApi({
    ...baseQuerySettings,
    reducerPath: "object/api",
    tagTypes: ["Object"],
    endpoints: () => ({})
})