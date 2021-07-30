import React, { useEffect, Suspense, lazy } from "react";
import { Switch, Route , Redirect} from "react-router-dom";
import { useDispatch } from "react-redux";
import userOperations from "../redux/user/userOperations";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import PublicRoute from "../Components/PublicRoute/PublicRoute";
import Header from './Header/Header';

const MainPage = lazy(() =>
  import("../Pages/MainPage/MainPage" /* webpackChunkName: "home" */)
);
const LoginPage = lazy(() =>
  import("../Pages/LoginPage/LoginPage" /* webpackChunkName: "login" */)
);
const RegistrationPage = lazy(() =>
  import("../Pages/RegistrationPage/RegistrationPage" /* webpackChunkName: "registration" */)
);
const DairyPage = lazy(() =>
  import("../Pages/DairyPage/DairyPage" /* webpackChunkName: "dairy" */)
);
const CalculatorPage = lazy(() =>
  import("../Pages/CalculatorPage/CalculatorPage" /* webpackChunkName: "calc" */)
);

export default function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userOperations.getCurrentUser());
  }, [dispatch]);

    return (
        <>
            <Header />
          <Suspense
            fallback={<Loader type="ThreeDots" color="#fc842d" height={130} width={130} style={{ textAlign: "center", }} />}
          >
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/registration" component={RegistrationPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/dairy"  component={DairyPage} />
              <Route path="/calculator"  component={CalculatorPage} />
              <Redirect to="/" />

                {/*<PublicRoute path="/" exact>*/}
                {/*    <MainPage />*/}
                {/*</PublicRoute>*/}
                {/*<PublicRoute path="/registration" restricted redirectTo="/calculator">*/}
                {/*    <RegistrationPage />*/}
                {/*</PublicRoute>*/}
                {/*<PublicRoute path="/login" restricted redirectTo="/calculator">*/}
                {/*    <LoginPage />*/}
                {/*</PublicRoute>*/}
                {/*<PrivateRoute path="/calculator" redirectTo="/login">*/}
                {/*    <CalculatorPage />*/}
                {/*</PrivateRoute>*/}
                {/*<PrivateRoute path="/dairy" redirectTo="/login">*/}
                {/*    <DairyPage />*/}
                {/*</PrivateRoute>*/}
            </Switch>
          </Suspense>
        </>
    );
}
