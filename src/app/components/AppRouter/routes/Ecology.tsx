import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import { RouteNames, ecologyRoutes } from "../../../router"

const Ecology = () => {
	return (
		<Switch>
      {ecologyRoutes.map(route =>
        <Route { ...route } key={route.path} />
      )}
      <Redirect to={RouteNames.SIGNIN} />
    </Switch>
	)
}

export default Ecology