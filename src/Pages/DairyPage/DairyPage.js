import styles from './DairyPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'debounce';

import DiaryAddProductForm from '../../Components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductList from '../../Components/DiaryProductList/DiaryProductList';
import DiaryDateCalendar from '../../Components/DiaryDateCalendar/DiaryDateCalendar';
import Container from '../../Components/Layout/Container';
import Section from '../../Components/Layout/Section';
import mealsOperations from '../../redux/meals/mealsOperations';
import mealsSelectors from '../../redux/meals/mealsSelectors';

import { useState, useEffect } from 'react';
const DiaryPage = () => {
  const [showList, setShowList] = useState(false);
  const [width, setWidth] = useState(null);
  const date = useSelector(mealsSelectors.getDate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mealsOperations.getMealsByDay());
  }, [date]);

  // useEffect(() => {
  //   setWidth(document.documentElement.clientWidth);
  // }, []);
  //
  // window.onresize = debounce(resize, 200);
  //
  // function resize() {
  //   setWidth(document.documentElement.clientWidth);
  // }
  //
  // const toggleList = () => setShowList(!showList);

  return (
    <Container>
      <DiaryDateCalendar />
      <DiaryAddProductForm />
      <DiaryProductList />
    </Container>

    // <Container>
    //       {width >= 768 && (
    //         <>
    //           <DiaryDateCalendar />
    //           <DiaryAddProductForm />
    //           <DiaryProductList />
    //         </>
    //       )}
    //       {showList && width <= 768 && (
    //         <div>
    //           <DiaryDateCalendar />
    //           <DiaryProductList toggleList={toggleList} />
    //
    //           <button
    //             className={styles.add}
    //             type="button"
    //             onClick={toggleList}
    //           ></button>
    //         </div>
    //       )}
    //       {!showList && width <= 768 && (
    //         <DiaryAddProductForm toggleList={toggleList} />
    //       )}
    //     </Layout>
  );
};

export default DiaryPage;
