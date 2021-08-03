import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userOperations from '../../redux/user/userOperations';
import styles from '../CalculatorCalorieForm/CalculatorCalorieForm.module.scss';

export default function CalculatorCalorieForm() {
  const [currentUser, setCurrentUser] = useState({
    currentWeight: '',
    height: '',
    age: '',
    desiredWeight: '',
    bloodType: '',
  });
  const dispatch = useDispatch();

  const BloodType = {
    FIRST_GROUP: '1',
    SECOND_GROUP: '2',
    THIRD_GROUP: '3',
    FOURTH_GROUP: '4',
  };
  const handleChange = event => {
    let name = event.currentTarget.name;
    let value = event.currentTarget.value;
    setCurrentUser(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = event => {
    event.preventDefault();
    dispatch(
      userOperations.calculateLoggedInUser({
        age: Number(currentUser.age),
        height: Number(currentUser.height),
        currentWeight: Number(currentUser.currentWeight),
        desiredWeight: Number(currentUser.desiredWeight),
        bloodType: Number(currentUser.bloodType),
      }),
    );
    setCurrentUser({
      currentWeight: '',
      height: '',
      age: '',
      desiredWeight: '',
      bloodType: '1',
    });
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>Узнай свою суточную норму калорий</div>

        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.input_wrapper}>
            <div className={styles.left_input}>
              <label className={styles.label} htmlFor="height">
                Рост *
              </label>
              <input
                className={styles.input}
                type="number"
                name="height"
                required
                value={currentUser.height}
                onChange={handleChange}
              />
              <label className={styles.label} htmlFor="age">
                Возраст *
              </label>
              <input
                className={styles.input}
                type="number"
                name="age"
                required
                value={currentUser.age}
                onChange={handleChange}
              />
              <label className={styles.label} htmlFor="currentWeight">
                Текущий вес *
              </label>
              <input
                className={styles.input}
                type="number"
                name="currentWeight"
                required
                value={currentUser.currentWeight}
                onChange={handleChange}
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
                required
                value={currentUser.desiredWeight}
                onChange={handleChange}
              />
              <div className={styles.wrapper}>
                <p className={styles.label_radio_boxes}>Группа крови *</p>
                <div className={styles.radio_boxes}>
                  <label className={styles.label_radio} htmlFor="bloodType_1">
                    <input
                      id="bloodType_1"
                      type="radio"
                      name="bloodType"
                      checked={currentUser.bloodType === BloodType.FIRST_GROUP}
                      value={BloodType.FIRST_GROUP}
                      onChange={handleChange}
                    />
                    1
                  </label>
                  <label className={styles.label_radio} htmlFor="bloodType_2">
                    <input
                      id="bloodType_2"
                      type="radio"
                      name="bloodType"
                      checked={currentUser.bloodType === BloodType.SECOND_GROUP}
                      value={BloodType.SECOND_GROUP}
                      onChange={handleChange}
                    />
                    2
                  </label>
                  <label className={styles.label_radio} htmlFor="bloodType_3">
                    <input
                      id="bloodType_3"
                      type="radio"
                      name="bloodType"
                      checked={currentUser.bloodType === BloodType.THIRD_GROUP}
                      value={BloodType.THIRD_GROUP}
                      onChange={handleChange}
                    />
                    3
                  </label>
                  <label className={styles.label_radio} htmlFor="bloodType_4">
                    <input
                      id="bloodType_4"
                      type="radio"
                      name="bloodType"
                      checked={currentUser.bloodType === BloodType.FOURTH_GROUP}
                      value={BloodType.FOURTH_GROUP}
                      onChange={handleChange}
                    />
                    4
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.btn_wrapper}>
            <button type="submit" className={styles.button}>
              Похудеть
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
