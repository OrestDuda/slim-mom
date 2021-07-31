import styles from "./Nav.module.scss";
import React from "react"
import { NavLink } from "react-router-dom";

 export default function Nav (){
  return (
    <nav>
      <div>
        <NavLink className={styles.nav__link_auth} activeClassName={styles.nav__link__active_auth} to='/login'>ВХОД</NavLink>
        <NavLink className={styles.nav__link_auth} activeClassName={styles.nav__link__active_auth} to='/registration'>РЕГИСТРАЦИЯ</NavLink>
      </div>
    </nav>
  );
};

