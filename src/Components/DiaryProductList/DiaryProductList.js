import styles from './DiaryProductList.module.scss';
import { useSelector } from 'react-redux';
import DairyProductListItem from '../DiaryProductListItem/DiaryProductListItem';
import mealsSelectors from '../../redux/meals/mealsSelectors';

const DiaryProductList = () => {
  const products = useSelector(mealsSelectors.getFood);
  return (
    <table className={styles.list}>
      <tbody>
        {products.map(item => (
          <DairyProductListItem product={item} key={item._id} />
        ))}
      </tbody>
    </table>
  );
};
export default DiaryProductList;
