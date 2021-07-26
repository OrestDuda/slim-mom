import style from "./CalculatorCalorieForm.module.scss";
import s from "../Container/Container.module.scss";
import BasicButton from "../BasicButton/BasicButton";
//import React, { useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
import BloodGroup from "./BloodGroup/BloodGroup";

const CalculatorCalorieForm = () => {
  /*     clearForm();
    };
 
    const clearForm = () => {
       setHeight('');
       setAge('');
       setCurrentWeight('');
       setDesiredWeight('');
       setBloodGroup('1');
    };
  */
  return (
    <div className={s.container}>
      <div className={style.title}>Просчитай свою суточную норму калорий прямо сейчас</div>

      <div
        className={style.form}
        //onSubmit={handlerSubmit}
      >
        <div className={style.input_wrapper}>
          <div className={style.left_input}>
            <label className={style.label} htmlFor="height">
              Рост *
            </label>
            <input
              className={style.input}
              //value={height}
              type="number"
              name="height"
              //placeholder="Рост *"
              //value={height}
              //onChange={onHeightChange}
            />
            <label className={style.label} htmlFor="age">
              Возраст *
            </label>
            <input
              className={style.input}
              type="number"
              name="age"
              //placeholder="Возраст *"
              //value={age}
              //onChange={onAgeChange}
            />
            <label className={style.label} htmlFor="weight">
              Текущий вес *
            </label>
            <input
              className={style.input}
              type="number"
              name="weight"
              //placeholder="Текущий вес *"
              //value={weight}
              //onChange={onCurrentWeightChange}
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
              //placeholder="Желаемый вес *"
              //value={desiredWeight}
              //onChange={onDesiredWeightChange}
            />

            <BloodGroup
            //bloodGroup={bloodType}
            //onChange={onBloodGroupChange}
            />
          </div>
        </div>
        <div className={style.btn_wrapper}>
          <BasicButton type="submit">Похудеть</BasicButton>
        </div>
      </div>
    </div>
  );
};

export default CalculatorCalorieForm;
