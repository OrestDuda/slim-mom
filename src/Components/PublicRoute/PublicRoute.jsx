import React from "react";
import { Route, Redirect } from "react-router-dom";
import userSelectors from "../../redux/user/userSelectors";
import { useSelector } from "react-redux";


export default function PublicRoute({
                                        isAuthenticated,
                                        redirectTo,
                                        children,
                                        ...routeProps
                                    }) {
    const isLoggedIn = useSelector(userSelectors.getIfLoggedIn);

    return (
        <Route {...routeProps}>
            {isLoggedIn && routeProps.restricted ? (
                <Redirect to={redirectTo} />
            ) : (
                children
            )}
        </Route>
    );
}