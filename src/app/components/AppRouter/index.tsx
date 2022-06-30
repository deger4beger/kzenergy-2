import React, { Suspense, lazy } from "react"
import { useAppSelector } from "../../hooks/redux"
import { UserRoles } from "../../../types/user"

const Unauthorized = lazy(() => import("./routes/Unauthorized"))
const Facility = lazy(() => import ("./routes/Facility"))
const Ecology = lazy(() => import ("./routes/Ecology"))
const Admin = lazy(() => import ("./routes/Admin"))
const Preloader = lazy(() => import ("../Preloader"))

const AppRouter = () => {

  const role = useAppSelector(state => state.userReducer.userData.role)

  const getRoutes = () => {
    switch (role) {
      case null:
        return <Unauthorized />
      case UserRoles.FacilityWorker:
        return <Facility />
      case UserRoles.Ecologist:
        return <Ecology />
      case UserRoles.Admin:
        return <Admin />
      default:
        return "Some error occured"
    }
  }

  return <Suspense fallback={<Preloader />}>
    { getRoutes() }
  </Suspense>

}

export default AppRouter