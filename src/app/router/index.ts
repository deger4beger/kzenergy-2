import React from "react"
import Signin from "../pages/Signin"
import Signup from "../pages/Signup"

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    SIGNIN = "/signin",
    SIGNUP = "/signup"
}

export const unauthorizedRoutes: IRoute[] = [
    {path: RouteNames.SIGNIN, exact: true, component: Signin},
    {path: RouteNames.SIGNUP, exact: true, component: Signup}
]

export const facilityRoutes: IRoute[] = [

]

export const ecologyRoutes: IRoute[] = [

]

export const adminRoutes: IRoute[] = [

]