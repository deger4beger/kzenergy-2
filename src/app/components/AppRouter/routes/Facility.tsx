import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import { RouteNames, facilityRoutes } from "../../../router"

const Facility = () => {
	return (
		<Switch>
      {facilityRoutes.map(route =>
        <Route { ...route } key={route.path} />
      )}
      <Redirect to={RouteNames.SIGNIN} />
    </Switch>
	)
}

export default Facility