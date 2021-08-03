import styles from './UserInfo.module.scss';
import React from 'react';
import userSelectors from '../../redux/user/userSelectors';
import userOperations from '../../redux/user/userOperations';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import useViewport from '../DiaryAddProductForm/helperDailAdd';

export default function UserInfo() {
  const user = useSelector(userSelectors.getUser);
  const dispatch = useDispatch();
  const userName = user.name;

  const { width } = useViewport();
  const breakpoint = 767;
  const history = useHistory();
  const handleGoBack = () => {
    history.push('/dairy');
  };
  const location = useLocation();
  return (
    <div className={styles.userBox}>
      {width < breakpoint && location.pathname === '/dairy/add' && (
        <button onClick={handleGoBack}>back</button>
      )}
      <div className={styles.userInfo}>
        <span className={styles.name}>{userName}</span>
        <span className={styles.slash} />
        <button
          type="button"
          className={styles.logout}
          onClick={() => dispatch(userOperations.logOut())}
        >
          Выйти
        </button>
      </div>
    </div>
  );
}
