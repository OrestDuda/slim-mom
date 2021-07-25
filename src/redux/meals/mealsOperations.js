import axios from 'axios';
import notify from '../../services/notify';
// import { useSelector } from 'react-redux';
// import { userSelectors } from '../user';

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

const getMealsByDay = date => async dispatch => {
  dispatch(fetchMealsByDayRequest());
  try {
    const { data } = await axios.get(`/meals/${date}`);
    dispatch(fetchMealsByDaySuccess(data));
  } catch (error) {
    notify(error.message);
    dispatch(fetchMealsByDayError(error));
  }
};

const addFoodToMeals = (date, food) => async dispatch => {
  dispatch(addFoodToMealsRequest());
  try {
    const { data } = await axios.patch(`/meals/${date}/food`, food);
    dispatch(addFoodToMealsSuccess(data));
  } catch (error) {
    notify(error.message);
    dispatch(addFoodToMealsError(error));
  }
};

const deleteFoodFromMeals = (date, foodId) => async dispatch => {
  dispatch(deleteFoodFromMealsRequest());
  try {
    await axios.delete(`/meals/${date}/food/${foodId}`);
    dispatch(deleteFoodFromMealsSuccess(foodId));
  } catch (error) {
    notify(error.message);
    dispatch(deleteFoodFromMealsError(error));
  }
};

const mealsOperations = { addFoodToMeals, getMealsByDay, deleteFoodFromMeals };

export default mealsOperations;
