import styles from "./Nav.module.scss";

import React from "react"
import { NavLink } from "react-router-dom";

const Nav = () => {
  const isAuth = false
  return (
    <nav>
      {isAuth ? null :
      <div>
        <NavLink className={styles.nav__link} to='/login'>ВХОД</NavLink>
        <NavLink className={styles.nav__link} to='/registration'>РЕГИСТРАЦИЯ</NavLink>
      </div>
      }
      {isAuth ? 
      <div>
        <NavLink className={styles.nav__link} to='/diary'>ДНЕВНИК</NavLink>
        <NavLink className={styles.nav__link} to='/calculator'>КАЛЬКУЛЯТОР</NavLink>
      </div>
        : null
      }
      
    </nav>
  );
};
export default Nav;
