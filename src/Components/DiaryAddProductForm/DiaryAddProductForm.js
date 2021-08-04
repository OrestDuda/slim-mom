import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import styles from './DiaryAddProductForm.module.scss';
import foodSelectors from '../../redux/food/foodSelectors';
import mealsSelectors from '../../redux/meals/mealsSelectors';
import mealsOperations from '../../redux/meals/mealsOperations';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from 'react-router-dom';
import useViewport from '../../Components/DiaryAddProductForm/helperDailAdd';

const DiaryAddProductForm = ({ toggleList }) => {
  const [foodItem, setProduct] = useState('');
  const [portionSize, setGramm] = useState('');
  const dispatch = useDispatch();
  const date = useSelector(mealsSelectors.getDate);
  const foodState = useSelector(foodSelectors.getFood);

  const handleGrammChange = event => setGramm(+event.target.value);

  const onSelect = (event, value) => {
    setProduct(value);
  };

  const { width } = useViewport();
  const breakpoint = 767;

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(mealsOperations.addFoodToMeals(foodItem, portionSize, date));
    setProduct('');
    setGramm('');
    if (width < breakpoint) {
      handleGoBack();
    }
  };

  const history = useHistory();
  const handleGoBack = () => {
    history.push('/dairy');
  };
  return (
    <div className={styles.wrapperForMobile}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.searchBar}>
          <Autocomplete
            value={foodItem}
            id="search_v2"
            disableClearable
            options={foodState.map(option => option.title.ru)}
            onChange={onSelect}
            forcePopupIcon={false}
            renderInput={params => (
              <TextField
                {...params}
                id="standard-search"
                label="Введите название продукта"
                margin="normal"
                required
                InputProps={{ ...params.InputProps, type: 'search' }}
              />
            )}
          />
        </div>

        <div className={styles.grammAdd}>
          <TextField
            id="standard-search"
            label="Граммы"
            margin="normal"
            onChange={handleGrammChange}
            value={portionSize}
            required
          />
        </div>

        <button className={styles.button} type="submit">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default DiaryAddProductForm;
