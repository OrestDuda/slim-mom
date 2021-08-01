import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './RightSideBar.module.scss';
import userSelectors from '../../redux/user/userSelectors';
import mealsSelectors from '../../redux/meals/mealsSelectors';

export default function RightSideBar() {
  const dailyLimit = useSelector(userSelectors.getUserDailyLimit);
  const notRecommended = useSelector(userSelectors.getUserNotRecommendedFood);
  const mealsOnDay = useSelector(mealsSelectors.getFood);
  const forday = useSelector(mealsSelectors.getDate);

  let sumKcal = 0;
  const mealsKkal = mealsOnDay.map(item => {
    Number(item.kcal);
    sumKcal += item.kcal;
  });
  const leftForDay = dailyLimit - sumKcal;
  const percentConsumed = (sumKcal * 100) / dailyLimit;
  const notRecommendedFormatted = notRecommended.map(
    item => item.charAt(0).toUpperCase() + item.slice(1),
  );
  const notRecommendedFormattedString = notRecommendedFormatted.join(', ');

  return (
    <div className={styles.container_Siderbar}>
      <div className={styles.summary}>
        <h2 className={styles.title}>Сводка за {forday}</h2>
        <div className={styles.statistics}>
          <ul className={styles.listName}>
            <li className={styles.text}>
              <span className={styles.text}>Осталось</span>
              <span className={styles.text}>
                {dailyLimit ? `${Math.round(leftForDay)} ккал` : '000 ккал'}
              </span>
            </li>
            <li className={styles.text}>
              <span className={styles.text}>Употреблено</span>
              <span className={styles.text}>
                {mealsOnDay.length === 0
                  ? '000 ккал'
                  : `${Math.round(sumKcal)} ккал`}
              </span>
            </li>
            <li className={styles.text}>
              <span className={styles.text}>Дневная норма</span>
              <span className={styles.text}>
                {dailyLimit ? `${Math.round(dailyLimit)} ккал` : '000 ккал'}
              </span>
            </li>
            <li className={styles.text}>
              <span className={styles.text}>n% от нормы</span>
              {dailyLimit ? `${percentConsumed.toFixed(0)} %` : '000 ккал'}
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.menu}>
        <h2 className={styles.title}>Нерекомендуемые продукты</h2>
        <span className={styles.text}>
          {notRecommended.length === 0
            ? 'Здесь будет отображаться Ваш рацион'
            : notRecommendedFormattedString}
        </span>
      </div>
    </div>
  );
}
