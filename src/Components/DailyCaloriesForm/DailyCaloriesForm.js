import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userOperations from '../../redux/user/userOperations';
import styles from '../DailyCaloriesForm/DailyCaloriesForm.module.scss';
import { userSelectors } from '../../redux/user';
import Modal from '../Modal/Modal';

export default function CalculatorFormPublic() {
  const [publicUser, setPublicUser] = useState({
    currentWeight: '',
    height: '',
    age: '',
    desiredWeight: '',
    bloodType: '1',
  });
  const [modalWindow, setModalWindow] = useState({
    isOpen: false,
  });
  const PublicUserData = useSelector(userSelectors.getPublicUser);
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
    setPublicUser(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = event => {
    event.preventDefault();
    dispatch(
      userOperations.publicUserCalculate({
        age: Number(publicUser.age),
        height: Number(publicUser.height),
        currentWeight: Number(publicUser.currentWeight),
        desiredWeight: Number(publicUser.desiredWeight),
        bloodType: Number(publicUser.bloodType),
      }),
    );
    setPublicUser({
      currentWeight: '',
      height: '',
      age: '',
      desiredWeight: '',
      bloodType: '1',
    });
    setModalWindow({ isOpen: true });
  };
  function toggleModal() {
    setModalWindow({
      isOpen: false,
    });
  }
  return (
    <div>
      {modalWindow.isOpen && PublicUserData.target !== undefined && (
        <Modal onClose={toggleModal} userData={PublicUserData.target} />
      )}
      <div className={styles.title}>
        Просчитай свою суточную норму калорий прямо сейчас
      </div>
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
              value={publicUser.height}
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
              value={publicUser.age}
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
              value={publicUser.currentWeight}
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
              value={publicUser.desiredWeight}
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
                    checked={publicUser.bloodType === BloodType.FIRST_GROUP}
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
                    checked={publicUser.bloodType === BloodType.SECOND_GROUP}
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
                    checked={publicUser.bloodType === BloodType.THIRD_GROUP}
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
                    checked={publicUser.bloodType === BloodType.FOURTH_GROUP}
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
  );
}
