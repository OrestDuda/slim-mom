import styles from './DiaryProductListItem.module.scss';
import mealsOperations from '../../redux/meals/mealsOperations';
import { useDispatch } from 'react-redux';

export default function DairyProductListItem({
  product: { foodItem, portionSize, kcal, _id },
}) {
  const dispatch = useDispatch();

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
        <button onClick={() => onDelete(_id)} className={styles.delete} />
      </td>
    </tr>
  );
}
