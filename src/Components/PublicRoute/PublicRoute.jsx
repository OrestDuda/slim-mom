
import { Redirect, Route } from "react-router";

const PublicRoute = ({ component: Component, isAuth, redirectTo, ...routesProps }) => (
  <Route
    {...routesProps}
    render={(props) =>
      isAuth && routesProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default PublicRoute