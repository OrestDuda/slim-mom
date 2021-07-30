// import styles from "./LoginPage.module.css";

import React from 'react';
import { useSelector } from 'react-redux';

import Container from '../../Components/Container/Container';
import Header from '../../Components/Header/Header';
import LoginForm from '../../Components/LoginForm/LoginForm';
// import Spinner from '../../Components/Spinner/Spinner';
// import isLoading from '../';

const LoginPage = () => {
//   const loading = useSelector(isLoading);

  return (
    <>
      <Header />
        <Container>
          <LoginForm />
        </Container>
      
      {/* {loading && <Spinner />} */}
    </>
  );
};

export default LoginPage;
