import React, { useEffect, Suspense, lazy } from "react";
import { Switch, Route , Redirect} from "react-router-dom";
import { useDispatch } from "react-redux";
import userOperations from "../redux/user/userOperations";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Header from './Header/Header';
import Container from './Container/Container';

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
  //to check if loggedIn user
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(userOperations.getCurrentUser());
  // }, [dispatch]);

    return (
        <>
          <Header/>
          <Container>
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
            </Switch>
          </Suspense>
          </Container>
        </>
    );
}

