import React, { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import userOperations from '../redux/user/userOperations';
import Loader from '../Components/Loader/Loader';
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute';
import PublicRoute from '../Components/PublicRoute/PublicRoute';
import userSelectors from '../redux/user/userSelectors';
import Header from './Header/Header';
import RightSideBar from './RightSideBar/RightSideBar';
import DiaryAddProductForm from '../Components/DiaryAddProductForm/DiaryAddProductForm';
import BgWrapper from '../Components/Layout/BgWrapper';

const MainPage = lazy(() =>
  import('../Pages/MainPage/MainPage' /* webpackChunkName: "home" */),
);
const LoginPage = lazy(() =>
  import('../Pages/LoginPage/LoginPage' /* webpackChunkName: "login" */),
);
const RegistrationPage = lazy(() =>
  import(
    '../Pages/RegistrationPage/RegistrationPage' /* webpackChunkName: "registration" */
  ),
);
const DairyPage = lazy(() =>
  import('../Pages/DairyPage/DairyPage' /* webpackChunkName: "dairy" */),
);
const CalculatorPage = lazy(() =>
  import(
    '../Pages/CalculatorPage/CalculatorPage' /* webpackChunkName: "calc" */
  ),
);

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userOperations.getCurrentUser());
  }, [dispatch]);
  const userLoggedIn = useSelector(userSelectors.getIfLoggedIn);
  return (
    <>
      <BgWrapper>
        <Suspense fallback={<Loader />}>
          <Header />
          <Switch>
            <PublicRoute path="/" exact restricted redirectTo="/calculator">
              <MainPage />
            </PublicRoute>
            <PublicRoute
              path="/registration"
              restricted
              redirectTo="/calculator"
            >
              <RegistrationPage />
            </PublicRoute>
            <PublicRoute path="/login" restricted redirectTo="/dairy">
              <LoginPage />
            </PublicRoute>

            <PrivateRoute path="/calculator" redirectTo="/login">
              <CalculatorPage />
            </PrivateRoute>
            <PrivateRoute exact path="/dairy" redirectTo="/login">
              <DairyPage />
            </PrivateRoute>
            <PrivateRoute path="/dairy/add" redirectTo="/login">
              <DiaryAddProductForm />
            </PrivateRoute>
          </Switch>
          {userLoggedIn && <RightSideBar />}
        </Suspense>
      </BgWrapper>
    </>
  );
}
