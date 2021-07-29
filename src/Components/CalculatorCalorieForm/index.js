import React, { Component } from 'react';
import { connect } from 'react-redux';
import CalculatorPrimaryInput from './';
import userOperations from '../../redux/user/userOperations';
//import FormValidation from './FormValidation';
import styles from '../../Components/CalculatorCalorieForm/CalculatorCalorieForm.module.scss';

class CalculatorCaloriesForm extends Component {
  handleClick = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: + value });
  };

  submitForm = event => {
    event.preventDefault();
    const userParameters = {
      height: this.state.height,
      age: this.state.age,
      weight: this.state.weight,
      desiredWeight: this.state.desiredWeight,
      bloodType: this.state.bloodType,
    };
    this.props.publicUserCalculate(userParameters);

    this.reset();
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
    return (
      <div>
          <div className={styles.title}>
            Просчитай свою суточную норму калорий прямо сейчас
          </div>
          <form className={styles.form} onSubmit={this.submitForm}>
            <CalculatorPrimaryInput
              addInputData={this.handleClick}
              {...this.state}
            />
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
  userParameters: state.publicUser.userParameters,
});
const mapDispatchToProps = {
  saveUserParameters: userOperations.publicUserCalculate,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalculatorCaloriesForm);

