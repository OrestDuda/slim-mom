import styles from "./Logo.module.scss";
import React from "react"

import logo from '../../bcgimages/logo.svg'

const Logo = () => {
  return (
    <a href='/' className={styles.logo}>
      <img src={logo} alt="logo" />
      <div className={styles.logo__text}>
        <span className={styles.logo__slim}>Slim</span>
        <span className={styles.logo__mom}>Mom</span>
      </div>
    </a>
  );
};
export default Logo;