import React from 'react';
import styles from './MainPage.module.css';
import CalculatorCalorieFrom from '../../Components/CalculatorCalorieForm/CalculatorCalorieForm';

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
          <CalculatorCalorieFrom />
      </div>
    </div>
  );
};

export default MainPage;
