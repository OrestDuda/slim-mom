import React from 'react';
import styles from './MainPage.module.css';
import CalculatorCaloriesForm from '../../Components/CalculatorCalorieForm';

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      {/*  {isModal && <Modal />}
       */}
      <div className={styles.container}>
        <CalculatorCaloriesForm
          /*  onSubmit={onSubmit} */
          userParameters={{
            height: '',
            age: '',
            weight: '',
            desiredWeight: '',
            bloodType: '1',
          }}
        />
      </div>
    </div>
  );
};

export default MainPage;
