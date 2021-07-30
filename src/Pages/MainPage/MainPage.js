import React from 'react';
import styles from './MainPage.module.css';
import DailyCaloriesForm from '../../Components/DailyCaloriesForm/DailyCaloriesForm';

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
          <DailyCaloriesForm />
      </div>
    </div>
  );
};

export default MainPage;
