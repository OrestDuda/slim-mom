import React from 'react';

import LoginForm from '../../Components/LoginForm/LoginForm';
// import Spinner from '../../Components/Spinner/Spinner';
// import isLoading from '../';

const LoginPage = () => {
  //   const loading = useSelector(isLoading);

  return (
    <>
      <LoginForm />
      {/* {loading && <Spinner />} */}
    </>
  );
};

export default LoginPage;
