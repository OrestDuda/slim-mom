import { createAction } from '@reduxjs/toolkit';

const addFoodToMealsRequest = createAction('meals/addFoodToMealsRequest');
const addFoodToMealsSuccess = createAction('meals/addFoodToMealsSuccess');
const addFoodToMealsError = createAction('meals/addFoodToMealsError');

const mealsActions = {
  addFoodToMealsRequest,
  addFoodToMealsSuccess,
  addFoodToMealsError,
};

export default mealsActions;
