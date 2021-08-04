import Loader from 'react-loader-spinner';
import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loaders = () => {
  return (
    <Loader
      type="ThreeDots"
      color="#fc842d"
      height={130}
      width={130}
      style={{ textAlign: 'center' }}
    />
  );
};
export default Loaders;
