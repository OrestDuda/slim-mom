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
  dispatch(fetchMealsByDayRequest());
  try {
    const { data } = await axios.get(`/journal/${mealsDate}`);
    dispatch(fetchMealsByDaySuccess(data));
  } catch (error) {
    notify(error.message);
    dispatch(fetchMealsByDayError(error));
  }
};

const addFoodToMeals = (foodItem, portionSize) => async dispatch => {
  const foodToAdd = { foodItem, portionSize };

  dispatch(addFoodToMealsRequest());
  try {
    const { data } = await axios.post(`/journal`, foodToAdd);
    dispatch(addFoodToMealsSuccess(data));
  } catch (error) {
    notify(error.message);
    dispatch(addFoodToMealsError(error));
  }
};

const deleteFoodFromMeals = foodId => async dispatch => {
  const mealsDate = useSelector(mealsSelectors.getMealsDate);
  dispatch(deleteFoodFromMealsRequest());
  try {
    await axios.delete(`/journal/${mealsDate}/${foodId}`);
    dispatch(deleteFoodFromMealsSuccess(foodId));
  } catch (error) {
    notify(error.message);
    dispatch(deleteFoodFromMealsError(error));
  }
};

const mealsOperations = { addFoodToMeals, getMealsByDay, deleteFoodFromMeals };

export default mealsOperations;
