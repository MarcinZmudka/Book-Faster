import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserAuthContext } from "../content/UserAuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [userAuth] = useContext(UserAuthContext);
  return (
    <Route
      {...rest}
      render={props =>
        userAuth === true ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
