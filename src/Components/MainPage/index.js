import { Component } from 'react';
import { connect } from 'react-redux';
import {action}
import CalculatorCalorieForm from './CalculatorCalorieForm';

class MainPage extends Component {
  handleClick = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: +value });
  };

  submitForm = event => {
    event.preventDefault();
    const settings = {
      columns: this.state.columns,
      rows: this.state.rows,
      cells: this.state.cells,
    };
    this.props.setSettings(settings);
    console.log(settings);
    this.reset();
  };

  reset = () => {
    this.setState({ columns: '', rows: '', cells: '' });
  };

  render() {
    return (
      <>
        <form className="/" onSubmit={this.submitForm}>
       
          <CalculatorCalorieForm addInputData={this.handleClick} {...this.state} />
        </form>
      </>
    );
  }
}

// const mapStateToProps = state => ({
//   settings: state.settings,
// });
// const mapDispatchToProps = {
//   setSettings: actions.setSettings,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Form);
export default MainPage;