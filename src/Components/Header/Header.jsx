import styles from "./Header.module.scss";
import React from "react";
import Logo from "../Logo/Logo"
import Nav from "../Navigation/Nav";
import UserNav from "../Navigation/UserNav"
import UserInfo from "../UserInfo/UserInfo";
import {useSelector} from "react-redux";
import userSelectors from "../../redux/user/userSelectors";

export default function Header () {
    const userLoggedIn = useSelector(userSelectors.getIfLoggedIn)
  return (
    <div className={styles.container}>
      <header >
        <Logo />
        <span className={styles.slash}></span>
        <Nav/>
        <span className={styles.slash}/>
          {userLoggedIn ? <UserNav /> : <Nav />}
          {userLoggedIn && <UserInfo />}
      </header>
    </div>
  );
};

