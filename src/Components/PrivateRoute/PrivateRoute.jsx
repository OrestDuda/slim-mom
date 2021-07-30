import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuth, redirectTo, ...routeProps }) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuth ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

export default PrivateRoute