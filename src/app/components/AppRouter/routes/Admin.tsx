import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import { RouteNames, adminRoutes } from "../../../router"

const Admin = () => {
	return (
		<Switch>
      {adminRoutes.map(route =>
        <Route { ...route } key={route.path} />
      )}
      <Redirect to={RouteNames.ADMIN_MANAGEMENT} />
    </Switch>
	)
}

export default Admin