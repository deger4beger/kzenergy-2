import {combineReducers, configureStore} from "@reduxjs/toolkit"
import userReducer from "./auth/slice"

const rootReducer = combineReducers({
    userReducer,
    // [dialogApi.reducerPath]: dialogApi.reducer
})

export const setupStore = () => {
    return configureStore(
    {
        reducer: rootReducer,
        devTools: true,
        // middleware: (getDefaultMiddleware) =>
        //     getDefaultMiddleware()
        //         .concat(dialogApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']