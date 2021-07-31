import styles from './DiaryProductListItem.module.scss';
import mealsOperations from '../../redux/meals/mealsOperations';
import { useDispatch } from 'react-redux';

export default function DairyProductListItem({
  product: { foodItem, portionSize, kcal, _id },
}) {
  const dispatch = useDispatch();

  if (foodItem.length > 16 && document.documentElement.clientWidth <= 768) {
    const small = foodItem.split('');
    let str = small.filter((_, index) => index < 11);
    foodItem = str.join('') + '...';
  }
  if (foodItem.length > 30 && document.documentElement.clientWidth >= 768) {
    const small = foodItem.split('');
    let str = small.filter((_, index) => index < 27);
    foodItem = str.join('') + '...';
  }

  const onDelete = id => dispatch(mealsOperations.deleteFoodFromMeals(id));

  return (
    <tr className={styles.item}>
      <td className={styles.title}>{foodItem}</td>
      <td className={styles.weight}>{portionSize} г</td>
      <td className={styles.kcal}>
        {Math.round(kcal)}
        <span> ккал</span>
      </td>
      <td className={styles.td}>
        <button
          onClick={() => onDelete(_id)}
          className={styles.delete}
        ></button>
      </td>
    </tr>
  );
}
