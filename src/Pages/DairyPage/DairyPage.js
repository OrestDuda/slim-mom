import styles from './DairyPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import DiaryAddProductForm from '../../Components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductList from '../../Components/DiaryProductList/DiaryProductList';
import DiaryDateCalendar from '../../Components/DiaryDateCalendar/DiaryDateCalendar';
import Container from '../../Components/Layout/Container';
import mealsOperations from '../../redux/meals/mealsOperations';
import mealsSelectors from '../../redux/meals/mealsSelectors';
import foodOperations from '../../redux/food/foodOperations';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useViewport from '../../Components/DiaryAddProductForm/helperDailAdd';
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

  const history = useHistory();
  const handleClick = () => history.push('/dairy/add');
  const { width } = useViewport();
  const breakpoint = 767;

  return (
    <Container>
      <DiaryDateCalendar />
      {width > breakpoint && <DiaryAddProductForm />}
      <DiaryProductList />
      {width < breakpoint && (
        <Route exact path="/dairy/add">
          <DiaryAddProductForm />
        </Route>
      )}

      {width < breakpoint && (
        <button className={styles.go} onClick={handleClick} />
      )}
    </Container>
  );
};

export default DiaryPage;
