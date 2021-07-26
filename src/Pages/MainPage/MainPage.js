import React from "react";
import styles from "./MainPage.module.css";
import CalculatorCaloriesForm from "../../Components/CalculatorCalorieForm/CalculatorCalorieForm";

const MainPage = () => {
  const title = "Просчитай свою суточную норму калорий прямо сейчас";

  return (
    <div className={styles.wrapper}>
      {/*  {isModal && <Modal />}
       */}
      <div className={styles.container}>
        <CalculatorCaloriesForm title={title} />
      </div>
    </div>
  );
};

export default MainPage;
