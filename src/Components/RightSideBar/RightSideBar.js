import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userOperations from "../../redux/user/userOperations";
import styles from './RightSideBar.module.scss';
import userSelectors from "../../redux/user/userSelectors";

export default function RightSideBar (){
  // const currentUser = useSelector(userSelectors.getUser)
  // const notRecommended = useSelector(userSelectors.getUserNotRecommendedFood);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(userOperations.getCurrentUser());
  // }, [dispatch]);

  return (
    <div className={styles.container}>
        <div className={styles.summary}>
          <h2 className={styles.title}>Сводка за Date </h2>
          <div className={styles.statistics}>
            <ul className={styles.listName}>
            <li className={styles.text}>
            <span className={styles.text}>Осталось</span>
            <span className={styles.text}>000 ккал</span>
          </li>
          <li className={styles.text}>
            <span className={styles.text}>Употреблено</span>
            <span className={styles.text}>000 ккал</span>
          </li>
          <li className={styles.text}>
            <span className={styles.text}>Дневная норма</span>
            <span className={styles.text}>000 ккал</span>
          </li>
          <li className={styles.text}>
            <span className={styles.text}>n% от нормы</span>
            <span className={styles.text}>000 ккал</span>
          </li>
            </ul>
            
          </div>
        </div>
        <div className={styles.menu}>
          <h2 className={styles.title}>Нерекомендуемые продукты</h2>
          <span className={styles.text}>

        </span>
        </div>
      </div>
    );
  };
