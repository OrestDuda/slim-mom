import styles from "./Nav.module.scss";
import React, {useState} from "react"
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"


export default function UserNav (){
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }
    const navClasses = [styles.Menu]
    const classToAdd = navbarOpen ? styles.showMenu: styles.hideMenu;
    navClasses.push(classToAdd);
    return (
        <nav className={styles.navBar}>
            <button onClick={handleToggle}>
                {navbarOpen ? (
                    <MdClose style={{width: "24px", height: "24px" }} />
                ) : (
                    <FiMenu style={{ width: "24px", height: "24px" }} />
                )}
            </button>
                <div className={navClasses.join(' ')}>
                    <NavLink className={styles.nav__link} activeClassName={styles.nav__link__active} onClick={() => closeMenu()} to='/diary'>ДНЕВНИК</NavLink>
                    <NavLink className={styles.nav__link} activeClassName={styles.nav__link__active} onClick={() => closeMenu()} to='/calculator'>КАЛЬКУЛЯТОР</NavLink>
                </div>
        </nav>
    );
};