import style from "./CalculatorCalorieForm.module.scss";
import s from "../../Container/Container.module.scss";
//import React, { useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
import BloodGroup from "../BloodGroup";
import strawberry from "../../../backgroundimages/strawberry.png";
import image from "../../../backgroundimages/image.png";
import bckg from "../../../backgroundimages/bckg.png";
import backgr from "../../../backgroundimages/backgr.png";
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
      <section>
        <div className={style.image}>
          <div className={style.image_box}>
            <img className={style.overlay_strawberry} src={strawberry} alt="strawberry" width="286px" height="289px" />
            <img className={style.overlay_bannana} src={image} alt="bannana" width="773px" height="552px" />
            <img className={style.overlay_white} src={bckg} alt="backgroundwhite" width="602px" height="816px" />
          </div>
          <img className={style.overlay_leaves} src={backgr} alt="leaves" width="746px" height="846px" />
        </div>
        <div className={style.title}>Просчитай свою суточную норму калорий прямо сейчас</div>

        <form
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
          <div className="button">{/* <Button type="submit">Похудеть</Button> */}</div>
        </form>
      </section>
    </div>
  );
};

export default CalculatorCalorieForm;
