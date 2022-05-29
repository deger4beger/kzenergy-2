import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import { RouteNames, unauthorizedRoutes } from "../../../router"

const Unauthorized = () => {
	return (
		<Switch>
      {unauthorizedRoutes.map(route =>
        <Route { ...route } key={route.path} />
      )}
      <Redirect to={RouteNames.SIGNIN} />
    </Switch>
	)
}

export default Unauthorized