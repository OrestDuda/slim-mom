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

const getMealsByDay = () => async (dispatch, getState) => {
  const mealsDate = getState().meals.setDate;
  dispatch(fetchMealsByDayRequest());
  try {
    const response = await axios.get(`/journal/${mealsDate}`);
    dispatch(fetchMealsByDaySuccess(response.data));
  } catch (error) {
    notify(error.message);
    dispatch(fetchMealsByDayError(error));
  }
};

const addFoodToMeals = (foodItem, portionSize, onDay) => async dispatch => {
  const foodToAdd = { foodItem, portionSize, onDay };
  dispatch(addFoodToMealsRequest());
  try {
    const { data } = await axios.post(`/journal`, foodToAdd);
    dispatch(addFoodToMealsSuccess(data));
  } catch (error) {
    notify(error.message);
    dispatch(addFoodToMealsError(error));
  }
};

const deleteFoodFromMeals = foodId => async (dispatch, getState) => {
  const mealsDate = getState().meals.setDate;
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
