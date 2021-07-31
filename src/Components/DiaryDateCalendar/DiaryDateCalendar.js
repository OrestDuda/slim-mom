import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';

import mealsActions from '../../redux/meals/mealsActions';
import styles from './DiaryDateCalendar.module.scss';
import 'react-datepicker/dist/react-datepicker.css';

const DiaryDateCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();

  const onChange = date => {
    const jsonData = date.toJSON();
    const formatData = jsonData.slice(0, 10);
    dispatch(mealsActions.changeDate(formatData));
    setStartDate(date);
  };
  return (
    <div className={styles.date}>
      <DatePicker
        className={styles.calendar}
        dateFormat="dd.MM.yyyy"
        selected={startDate}
        onChange={date => onChange(date)}
      />
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <defs />
        <path
          fill="#9B9FAA"
          d="M15 9h-2v2h2V9zM11 9H9v2h2V9zM7.00008 9H5.00006v2h2.00002V9z"
        />
        <path
          fill="#9B9FAA"
          d="M17 2.00001h-1V0h-2v2.00001H6.00001V0H4v2.00001h-.99999c-1.11 0-1.98998.9-1.98998 2.00002L1 18c0 1.1.89001 2 2.00001 2H17c1.1 0 2-.9 2-2V3.99998c0-1.09997-.9-1.99997-2-1.99997zM17 18H3.00001V6.99998H17V18z"
        />
      </svg>
    </div>
  );
};

export default DiaryDateCalendar;
