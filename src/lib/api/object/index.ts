import { createApi } from "@reduxjs/toolkit/dist/query/react"
import { baseQuerySettings } from ".."

export const objectApi = createApi({
    ...baseQuerySettings("/facility"),
    reducerPath: "object/api",
    tagTypes: ["Object", "ObjectInfo"],
    endpoints: () => ({})
})