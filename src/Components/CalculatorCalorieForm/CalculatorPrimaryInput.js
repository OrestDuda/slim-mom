import style from './CalculatorCalorieForm.module.scss';

//import React, { useState } from 'react';
//import { useDispatch, useSelector } from "react-redux";

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
      <div className={style.input_wrapper}>
        <div className={style.left_input}>
          <label className={style.label} htmlFor="height">
            Рост *
          </label>
          <input
            className={style.input}
            type="number"
            name="height"
            value={height}
            onChange={addInputData}
          />
          <label className={style.label} htmlFor="age">
            Возраст *
          </label>
          <input
            className={style.input}
            type="number"
            name="age"
            value={age}
            onChange={addInputData}
          />
          <label className={style.label} htmlFor="weight">
            Текущий вес *
          </label>
          <input
            className={style.input}
            type="number"
            name="weight"
            value={weight}
            onChange={addInputData}
          />
        </div>
        <div className={style.right_input}>
          <label className={style.label} htmlFor="desiredWeight">
            Желаемый вес *
          </label>
          <input
            className={style.input}
            type="number"
            name="desiredWeight"
            value={desiredWeight}
            onChange={addInputData}
          />
          <div className={style.wrapper}>
            <p className={style.label_radio_boxes}>Группа крови *</p>

            <div className={style.radio_boxes}>
              <label className={style.label_radio} htmlFor="bloodType_1">
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
              <label className={style.label_radio} htmlFor="bloodType_2">
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
              <label className={style.label_radio} htmlFor="bloodType_3">
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
              <label className={style.label_radio} htmlFor="bloodType_4">
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
