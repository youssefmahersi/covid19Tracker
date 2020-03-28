import React from "react";
import { Route,Switch,Redirect } from "react-router-dom";
import Layout from "./Layout";
const Routes = ()=>(
    <Switch>
      <Route
            path="/corona"
            exact
            component={Layout}
          
          />
          <Redirect to="/corona" />
          </Switch>
)

export default Routes;