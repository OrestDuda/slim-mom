import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'debounce';
import { useEffect, useState } from 'react';

import styles from './DiaryAddProductForm.module.scss';

import foodOperations from '../../redux/food/foodOperations';
import foodSelectors from '../../redux/food/foodSelectors';
import foodActions from '../../redux/food/foodActions';
import mealsSelectors from '../../redux/meals/mealsSelectors';
import mealsOperations from '../../redux/meals/mealsOperations';

const DiaryAddProductForm = ({ toggleList }) => {
  const [foodItem, setProduct] = useState('');
  const [portionSize, setGramm] = useState('');

  const dispatch = useDispatch();

  const meals = useSelector(foodSelectors.getFilteredFood);
  const date = useSelector(mealsSelectors.getDate);
  /**
   * reset food state
   */
  const foodState = useSelector(foodSelectors.getFood);
  const filterState = useSelector(foodSelectors.getFoodFilter);
  if (foodState.length > 0 && !filterState) {
    dispatch(foodActions.cleanState());
  }
  /**
   * reset food state
   */
  const handleGrammChange = event => setGramm(+event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(mealsOperations.addFoodToMeals(foodItem, portionSize, date));
    setProduct('');
    setGramm('');
    // if (document.documentElement.clientWidth <= 768) {
    //   toggleList();
    // }
  };
  const onSearch = event => {
    setProduct(event.target.value);
    dispatch(foodActions.changeFilter(event.target.value));
    // debounce(dispatch(foodOperations.getFoodByQuery(foodItem)), 500);
    if (event.target.value.length > 2) {
      dispatch(foodOperations.getFoodByQuery(foodItem));
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        list="products"
        placeholder="Введите название продукта"
        value={foodItem}
        onChange={onSearch}
        required
      />
      <datalist id="products">
        {meals.map(item => (
          <option value={item.title.ru} />
        ))}
      </datalist>
      <input
        className={styles.input}
        type="number"
        placeholder="Граммы"
        value={portionSize}
        onChange={handleGrammChange}
        required
      />
      <button className={styles.button} type="submit">
        Добавить
      </button>
    </form>
  );
};

export default DiaryAddProductForm;
