import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import { useSelector } from 'react-redux';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import Header from './Header/Header';
import CalculatorCalorieForm from '../Components/CalculatorCalorieForm';
import LoginForm from './LoginForm/LoginForm';
import RegistrationForm from './RegistrationForm/RegistrationForm';

import userSelectors from '../redux/user/userSelectors'


function App() {
    const isAuth = false
        // useSelector(userSelectors.getIfLoggedIn())


    return (
        <>
        <Header />
            <Switch>
                <Route path="/calculator" component={<></>} />
                <PublicRoute
                    path="/registration"
                    component={RegistrationForm}
                    restricted
                    redirectTo="/home"
                />
                <PublicRoute
                    path="/login"
                    component={LoginForm}
                    restricted
                    redirectTo="/diary"
                />
                <PrivateRoute
                    path="/diary"
                    component={<></>}
                    isAuth={isAuth}
                    redirectTo="/login"
                />     
            </Switch>
        </>
    );
}
export default App;
