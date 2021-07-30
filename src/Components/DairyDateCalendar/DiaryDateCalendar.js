import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Calendar from './Calendar';
import setDate from '../../redux/calendar/calendarAction';
import productOperations from '../../redux/products/productOperations';

import style from './DiaryDateCalendar.module.css';

class DiaryDateCalendar extends Component {
  state = {
    date: '',
  };

  componentDidMount() {
    this.props.setDate(moment(Date.now()).format('YYYY-MM-DD'));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.date !== this.state.date) {
      this.props.toFetchProducts(this.state.date);
    }
  }

  handleTap = (someDate, setSomeDate) => {
    setSomeDate(someDate);

    const result = someDate ? moment(someDate).format('YYYY-MM-DD') : 0;
    this.setState({ date: result });
    this.props.setDate(result);
  };
  render() {
    return (
      <div className={style.CalendarContainer}>
        <Calendar onTap={this.handleTap} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  setDate,
  toFetchProducts: productOperations.fetchProducts,
};

export default connect(null, mapDispatchToProps)(DiaryDateCalendar);

