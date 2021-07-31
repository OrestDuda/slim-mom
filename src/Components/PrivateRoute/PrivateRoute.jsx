import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import userSelector from "../../redux/user/userSelectors";


export default function PrivateRoute({
                                         isAuthenticated,
                                         redirectTo,
                                         children,
                                         ...routeProps
                                     }) {
    const isLoggedIn = useSelector(userSelector.getIfLoggedIn);

    return (
        <Route {...routeProps}>
            {isLoggedIn ? children : <Redirect to={redirectTo} />}
        </Route>
    );
}