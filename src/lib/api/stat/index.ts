import { createApi } from "@reduxjs/toolkit/dist/query/react"
import { baseQuerySettings } from ".."

export const statApi = createApi({
    ...baseQuerySettings("/stat"),
    reducerPath: "stat/api",
    tagTypes: ["Waste"],
    endpoints: () => ({})
})