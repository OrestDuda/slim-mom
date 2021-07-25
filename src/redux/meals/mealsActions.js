import { createAction } from '@reduxjs/toolkit';

const addFoodToMealsRequest = createAction('meals/addFoodToMealsRequest');
const addFoodToMealsSuccess = createAction('meals/addFoodToMealsSuccess');
const addFoodToMealsError = createAction('meals/addFoodToMealsError');

const fetchMealsByDayRequest = createAction('meals/fetchMealsByDayRequest');
const fetchMealsByDaySuccess = createAction('meals/fetchMealsByDaySuccess');
const fetchMealsByDayError = createAction('meals/fetchMealsByDayError');

const deleteFoodFromMealsRequest = createAction(
  'meals/deleteFoodFromMealsRequest',
);
const deleteFoodFromMealsSuccess = createAction(
  'meals/deleteFoodFromMealsSuccess',
);
const deleteFoodFromMealsError = createAction('meals/deleteFoodFromMealsError');

const mealsActions = {
  addFoodToMealsRequest,
  addFoodToMealsSuccess,
  addFoodToMealsError,
  fetchMealsByDayRequest,
  fetchMealsByDaySuccess,
  fetchMealsByDayError,
  deleteFoodFromMealsRequest,
  deleteFoodFromMealsSuccess,
  deleteFoodFromMealsError,
};

export default mealsActions;
