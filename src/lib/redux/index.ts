import {combineReducers, configureStore} from "@reduxjs/toolkit"
import { archiveApi } from "lib/api/archive"
import { objectApi } from "lib/api/object"
import userReducer from "./auth/slice"

const rootReducer = combineReducers({
    userReducer,
    [objectApi.reducerPath]: objectApi.reducer,
    [archiveApi.reducerPath]: archiveApi.reducer
})

export const setupStore = () => {
    return configureStore(
    {
        reducer: rootReducer,
        devTools: true,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat([objectApi.middleware, archiveApi.middleware])
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']