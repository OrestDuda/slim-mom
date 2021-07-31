import styles from "./Header.module.scss";
import React from "react";

import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <div className={styles.container}>
      <header >
        <Logo />
        <span className={styles.slash}/>
        <Nav/>
      </header>
    </div>
  );
};
export default Header;
