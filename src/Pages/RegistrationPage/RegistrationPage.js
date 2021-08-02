// import styles from "./RegistrationPage.module.css";

// import styles from "./RegistrationPage.module.css";

import React from 'react';
import { useSelector } from 'react-redux';

import Container from '../../Components/Layout/Container';
import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm';
// import Spinner from '../../components/Spinner/Spinner';
// import isLoading from '../';

const RegisterPage = () => {
  //   const loading = useSelector(isLoading);

  return (
    <>
      <RegistrationForm />
      {/* {loading && <Spinner />} */}
    </>
  );
};

export default RegisterPage;
