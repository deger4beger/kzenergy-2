import {combineReducers, configureStore} from "@reduxjs/toolkit"
import { archiveApi } from "lib/api/archive"
import { objectApi } from "lib/api/object"
import { statApi } from "lib/api/stat"
import { userApi } from "lib/api/user"
import userReducer from "./auth/slice"

const rootReducer = combineReducers({
    userReducer,
    [objectApi.reducerPath]: objectApi.reducer,
    [archiveApi.reducerPath]: archiveApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [statApi.reducerPath]: statApi.reducer
})

export const setupStore = () => {
    return configureStore(
    {
        reducer: rootReducer,
        devTools: process.env.NODE_ENV === "development" ? true : false,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat([
                    objectApi.middleware,
                    archiveApi.middleware,
                    userApi.middleware,
                    statApi.middleware
                ])
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']