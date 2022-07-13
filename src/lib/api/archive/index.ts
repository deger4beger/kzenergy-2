import { createApi } from "@reduxjs/toolkit/dist/query/react"
import { baseQuerySettings } from ".."

export const archiveApi = createApi({
    ...baseQuerySettings("/archive"),
    reducerPath: "archive/api",
    tagTypes: ["SummaryReport"],
    endpoints: () => ({})
})