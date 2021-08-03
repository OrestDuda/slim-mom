import axios from 'axios';
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
  //получить блюда по дате , входные данные дата
  const mealsDate = getState().meals.setDate;
  dispatch(fetchMealsByDayRequest());
  try {
    const response = await axios.get(`/journal/${mealsDate}`);
    if (response.status === 204) {
      return dispatch(
        fetchMealsByDaySuccess({
          onDay: null,
          food: [],
        }),
      );
    }
    dispatch(fetchMealsByDaySuccess(response.data.dayJournal));
  } catch (error) {
    dispatch(fetchMealsByDayError(error));
  }
};

const addFoodToMeals = (foodItem, portionSize, onDay) => async dispatch => {
  // добавить еду к блюдам . входные данные (еду, порция, день)
  const foodToAdd = { foodItem, portionSize, onDay };

  dispatch(addFoodToMealsRequest());
  try {
    const { data } = await axios.post(`/journal`, foodToAdd);
    dispatch(addFoodToMealsSuccess(data));
  } catch (error) {
    dispatch(addFoodToMealsError(error));
  }
};

const deleteFoodFromMeals = foodId => async (dispatch, getState) => {
  //удалить еду из блюд. нужен ид еды

  const mealsDate = getState().meals.setDate;
  dispatch(deleteFoodFromMealsRequest());
  try {
    await axios.delete(`/journal/${mealsDate}/${foodId}`);
    dispatch(deleteFoodFromMealsSuccess(foodId));
  } catch (error) {
    dispatch(deleteFoodFromMealsError(error));
  }
};

const mealsOperations = { addFoodToMeals, getMealsByDay, deleteFoodFromMeals };

export default mealsOperations;
