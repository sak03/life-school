import React from "react";
import Auth from "./Auth";
import { Route, Redirect } from "react-router-dom"

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        Auth.getAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoutes;
