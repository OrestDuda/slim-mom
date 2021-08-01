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

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  submitForm = event => {
    event.preventDefault();
    const { height, age, weight, desiredWeight, bloodType } = this.state;
    this.props.publicUserCalculate(175, 32, 70, 65, 1);

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
          {/* <CalculatorPrimaryInput /> */}
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
