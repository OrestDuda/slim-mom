import axios from 'axios';
import notify from '../../services/notify';
import { useSelector } from 'react-redux';
import mealsSelectors from './mealsSelectors';

import mealsActions from './mealsActions';
const {
  addFoodToMealsRequest,
  addFoodToMealsSuccess,
  addFoodToMealsError,
  fetchMealsByDayRequest,
  fetchMealsByDaySuccess,
  fetchMealsByDayError,
  deleteFoodFromMealsRequest,
  deleteFoodFromMealsSuccess,
  deleteFoodFromMealsError,
} = mealsActions;

const getMealsByDay = mealsDate => async dispatch => {
  //получить блюда по дате , входные данные дата
  dispatch(fetchMealsByDayRequest());
  try {
    const { data } = await axios.get(`/journal/${mealsDate}`);
    dispatch(fetchMealsByDaySuccess(data));
  } catch (error) {
    notify(error.message);
    dispatch(fetchMealsByDayError(error.message));
  }
};

const addFoodToMeals = (foodItem, portionSize, onDay) => async dispatch => {
  // добавить еду к блюдам . входные данные (еду, порция, день)
  const foodToAdd = {
    foodItem,
    portionSize: Number.parseInt(portionSize),
    onDay,
  };

  dispatch(addFoodToMealsRequest());
  try {
    const { data } = await axios.post(`/journal`, foodToAdd);
    dispatch(addFoodToMealsSuccess(data));
  } catch (error) {
    notify(error.message);
    dispatch(addFoodToMealsError(error.message));
  }
};

const deleteFoodFromMeals = foodId => async dispatch => {
  //удалить еду из блюд. нужен ид еды
  const mealsDate = useSelector(mealsSelectors.getMealsDate);
  dispatch(deleteFoodFromMealsRequest());
  try {
    await axios.delete(`/journal/${mealsDate}/${foodId}`);
    dispatch(deleteFoodFromMealsSuccess(foodId));
  } catch (error) {
    notify(error.message);
    dispatch(deleteFoodFromMealsError(error.message));
  }
};

const mealsOperations = { addFoodToMeals, getMealsByDay, deleteFoodFromMeals };

export default mealsOperations;
