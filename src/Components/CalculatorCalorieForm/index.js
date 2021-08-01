import React, { Component } from 'react';
import { connect } from 'react-redux';
import CalculatorPrimaryInput from './';
import userOperations from '../../redux/user/userOperations';
import userSelectors from '../../redux/user/userSelectors';
//import FormValidation from './FormValidation';
import styles from '../../Components/CalculatorCalorieForm/CalculatorCalorieForm.module.scss';

class CalculatorCaloriesForm extends Component {
  state = {
    height: '',
    age: '',
    weight: '',
    desiredWeight: '',
    bloodType: '1',
  };
  BloodType = {
    FIRST_GROUP: '1',
    SECOND_GROUP: '2',
    THIRD_GROUP: '3',
    FOURTH_GROUP: '4',
  };

  addInputData = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  submitForm = event => {
    event.preventDefault();
    console.log(this.state);
    const { height, age, weight, desiredWeight, bloodType } = this.state;
    this.props.publicUserCalculate(
      height,
      age,
      weight,
      desiredWeight,
      bloodType,
    );

    // this.reset();
  };

  reset = () => {
    this.setState({
      height: '',
      age: '',
      weight: '',
      desiredWeight: '',
      bloodType: '1',
    });
  };

  render() {
    const { height, age, weight, desiredWeight, bloodType } = this.state;
    const { BloodType } = this;
    return (
      <div>
        <div className={styles.title}>
          Просчитай свою суточную норму калорий прямо сейчас
        </div>
        <form className={styles.form} onSubmit={this.submitForm}>
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
                onChange={this.addInputData}
              />
              <label className={styles.label} htmlFor="age">
                Возраст *
              </label>
              <input
                className={styles.input}
                type="number"
                name="age"
                value={age}
                onChange={this.addInputData}
              />
              <label className={styles.label} htmlFor="weight">
                Текущий вес *
              </label>
              <input
                className={styles.input}
                type="number"
                name="weight"
                value={weight}
                onChange={this.addInputData}
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
                onChange={this.addInputData}
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
                      onChange={this.addInputData}
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
                      onChange={this.addInputData}
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
                      onChange={this.addInputData}
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
                      onChange={this.addInputData}
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
}

const mapStateToProps = state => ({
  publicUser: userSelectors.getPublicUser(state),
});

const mapDispatchToProps = {
  publicUserCalculate: userOperations.publicUserCalculate,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalculatorCaloriesForm);
