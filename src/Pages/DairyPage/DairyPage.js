import styles from './DairyPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import DiaryAddProductForm from '../../Components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductList from '../../Components/DiaryProductList/DiaryProductList';
import DiaryDateCalendar from '../../Components/DiaryDateCalendar/DiaryDateCalendar';
import Container from '../../Components/Layout/Container';
import mealsOperations from '../../redux/meals/mealsOperations';
import mealsSelectors from '../../redux/meals/mealsSelectors';
import foodOperations from '../../redux/food/foodOperations';

import { useEffect } from 'react';
const DiaryPage = () => {
  const date = useSelector(mealsSelectors.getDate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mealsOperations.getMealsByDay());
  }, [date]);

  /**
   * Option 2 - get all catalogue
   */
  useEffect(() => {
    dispatch(foodOperations.getFood());
  }, [dispatch]);

  /**
   * Option 2 - get all catalogue
   */
  return (
    <Container>
      <DiaryDateCalendar />
      <DiaryAddProductForm />
      <DiaryProductList />
    </Container>
  );
};

export default DiaryPage;
