import styles from "./UserInfo.module.scss";
import React from 'react';
import userSelectors from '../../redux/user/userSelectors';
import userOperations from "../../redux/user/userOperations";
import {useSelector, useDispatch} from "react-redux";


export default function UserInfo(){
    const user = useSelector(userSelectors.getUser);
    const dispatch = useDispatch();
    const userName = user.name;
    return(
        <div className={styles.userBox}>
            <div className={styles.userInfo}>
                <span className={styles.name}>{userName}</span>
                <span className={styles.slash}/>
                <button type="button" className={styles.logout}  onClick={() => dispatch(userOperations.logOut())}>
                    Выйти
                </button>
            </div>
        </div>
    )
}



