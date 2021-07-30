import styles from './RightSideBar.module.scss';


const RightSideBar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.summary}>
          <h2 className={styles.title}>Сводка за Date </h2>
          <div className={styles.statistics}>
            <ul className={styles.listName}>
            <li className={styles.text}>
            <span className={styles.text}>Осталось</span>
            <span className={styles.text}>000 ккал</span>
          </li>
          <li className={styles.text}>
            <span className={styles.text}>Употреблено</span>
            <span className={styles.text}>000 ккал</span>
          </li>
          <li className={styles.text}>
            <span className={styles.text}>Дневная норма</span>
            <span className={styles.text}>000 ккал</span>
          </li>
          <li className={styles.text}>
            <span className={styles.text}>n% от нормы</span>
            <span className={styles.text}>000 ккал</span>
          </li>
            </ul>
            
          </div>
        </div>
        <div className={styles.menu}>
          <h2 className={styles.title}>Нерекомендуемые продукты</h2>
          <span className={styles.text}>
          Здесь будет отображаться Ваш рацион
        </span>
        </div>
      </div>
    );
  }

export default RightSideBar;