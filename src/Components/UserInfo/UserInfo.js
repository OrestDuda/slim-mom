import styles from "./UserInfo.module.scss";
//import { connect } from 'react-redux';
import React from 'react';

import verticalLine from '../../Images/images/vertical-line.png';
//import { authOperations, authSelectors } from '../../redux/auth';

const UserInfo = ({ name, onLogout }) => (
  <div className={styles.userBox}>
    <div className={styles.userInfo}>
      <span className={styles.name}>{name}</span>
      <img
        className={styles.verticalLine}
        src={verticalLine}
        alt="vertical-line"
        width="2"
        height="32"
      />
      <button type="button" className={styles.logout} onClick={onLogout}>
        Выйти
      </button>
    </div>
  </div>
);

//const mapStateToProps = state => ({
// name: authSelectors.getUserName(state),
//});

export default //connect(mapStateToProps, { onLogout: authOperations.logOut })
(UserInfo);
