import styles from './CalculatorCalorieForm.module.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

const CalculatorPrimaryInput = ({
  addInputData,
  bloodType,
  height,
  age,
  weight,
  desiredWeight,
}) => {
  const BloodType = {
    FIRST_GROUP: '1',
    SECOND_GROUP: '2',
    THIRD_GROUP: '3',
    FOURTH_GROUP: '4',
  };
  return (
    <>
      <div className={styles.input_wrapper}>
        <div className={styles.left_input}>
          <label className={styles.label} htmlFor="height">
            Рост *
          </label>
          <input
            className={styles.input}
            type="number"
            name="height"
            value={height}
            onChange={addInputData}
          />
          <label className={styles.label} htmlFor="age">
            Возраст *
          </label>
          <input
            className={styles.input}
            type="number"
            name="age"
            value={age}
            onChange={addInputData}
          />
          <label className={styles.label} htmlFor="weight">
            Текущий вес *
          </label>
          <input
            className={styles.input}
            type="number"
            name="weight"
            value={weight}
            onChange={addInputData}
          />
        </div>
        <div className={styles.right_input}>
          <label className={styles.label} htmlFor="desiredWeight">
            Желаемый вес *
          </label>
          <input
            className={styles.input}
            type="number"
            name="desiredWeight"
            value={desiredWeight}
            onChange={addInputData}
          />
          <div className={styles.wrapper}>
            <p className={styles.label_radio_boxes}>Группа крови *</p>

            <div className={styles.radio_boxes}>
              <label className={styles.label_radio} htmlFor="bloodType_1">
                <input
                  id="bloodType_1"
                  type="radio"
                  name="bloodType"
                  checked={bloodType === BloodType.FIRST_GROUP}
                  value={BloodType.FIRST_GROUP}
                  onChange={addInputData}
                />
                1
              </label>
              <label className={styles.label_radio} htmlFor="bloodType_2">
                <input
                  id="bloodType_2"
                  type="radio"
                  name="bloodType"
                  checked={bloodType === BloodType.SECOND_GROUP}
                  value={BloodType.SECOND_GROUP}
                  onChange={addInputData}
                />
                2
              </label>
              <label className={styles.label_radio} htmlFor="bloodType_3">
                <input
                  id="bloodType_3"
                  type="radio"
                  name="bloodType"
                  checked={bloodType === BloodType.THIRD_GROUP}
                  value={BloodType.THIRD_GROUP}
                  onChange={addInputData}
                />
                3
              </label>
              <label className={styles.label_radio} htmlFor="bloodType_4">
                <input
                  id="bloodType_4"
                  type="radio"
                  name="bloodType"
                  checked={bloodType === BloodType.FOURTH_GROUP}
                  value={BloodType.FOURTH_GROUP}
                  onChange={addInputData}
                />
                4
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatorPrimaryInput;
