import React, { lazy } from "react"
import Signin from "../pages/Signin"

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    SIGNIN = "/signin"
}

export const unauthorizedRoutes: IRoute[] = [
    {path: RouteNames.SIGNIN, exact: true, component: Signin},
]

export const facilityRoutes: IRoute[] = [

]

export const ecologyRoutes: IRoute[] = [

]

export const adminRoutes: IRoute[] = [

]