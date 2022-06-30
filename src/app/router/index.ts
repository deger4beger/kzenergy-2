import AdminManagement from "app/pages/AdminManagement"
import CompanyOverview from "app/pages/CompanyOverview"
import ObjectControl from "app/pages/ObjectControl"
import ReportManagement from "app/pages/ReportManagement"
import WasteManagement from "app/pages/WasteManagement"
import Signin from "../pages/Signin"
import Signup from "../pages/Signup"

export interface IRoute {
  path: string
  component: React.ComponentType
  exact?: boolean
}

export enum RouteNames {
  SIGNIN = "/signin",
  SIGNUP = "/signup",
  REPORT_MANAGEMENT="/reports",
  WASTE_MANAGEMENT="/wastes",
  OBJECT_CONTROL="/objects",
  COMPANY_OVERVIEW="/overview",
  ADMIN_MANAGEMENT="/admin"
}

export const unauthorizedRoutes: IRoute[] = [
  {path: RouteNames.SIGNIN, exact: true, component: Signin},
  {path: RouteNames.SIGNUP, exact: true, component: Signup}
]

export const facilityRoutes: IRoute[] = [
  {path: RouteNames.WASTE_MANAGEMENT, exact: true, component: WasteManagement},
]

export const ecologyRoutes: IRoute[] = [
  {path: RouteNames.REPORT_MANAGEMENT, exact: true, component: ReportManagement},
  {path: RouteNames.COMPANY_OVERVIEW, exact: true, component: CompanyOverview},
]

export const adminRoutes: IRoute[] = [
  {path: RouteNames.OBJECT_CONTROL, exact: true, component: ObjectControl},
  {path: RouteNames.ADMIN_MANAGEMENT, exact: true, component: AdminManagement},
]