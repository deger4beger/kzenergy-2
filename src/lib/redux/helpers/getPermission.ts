import { store } from "app/providers/AppProvider"


export const getPermissionToWrite = () => store.getState().userReducer.permission?.write