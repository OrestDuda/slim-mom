import styles from './Logo.module.scss';
import React from 'react';

import logo from '../../bcgimages/logo.svg';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink className={styles.logo} to="/">
      <img src={logo} alt="logo" />
      <div className={styles.logo__text}>
        <span className={styles.logo__slim}>Slim</span>
        <span className={styles.logo__mom}>Mom</span>
      </div>
    </NavLink>
  );
};
export default Logo;
