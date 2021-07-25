import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

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

const meals = createReducer([], {
  [fetchMealsByDaySuccess]: (_, { payload }) => payload,
  [addFoodToMealsSuccess]: (state, { payload }) => [...state, payload],
  [deleteFoodFromMealsSuccess]: (state, actions) =>
    state.filter(({ foodId }) => foodId !== actions.payload),
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [fetchMealsByDayError]: setError,
  [addFoodToMealsError]: setError,
  [deleteFoodFromMealsError]: setError,
});

const loading = createReducer(false, {
  [addFoodToMealsRequest]: () => true,
  [addFoodToMealsSuccess]: () => false,
  [addFoodToMealsError]: () => false,
  [fetchMealsByDayRequest]: () => true,
  [fetchMealsByDaySuccess]: () => false,
  [fetchMealsByDayError]: () => false,
  [deleteFoodFromMealsRequest]: () => true,
  [deleteFoodFromMealsSuccess]: () => false,
  [deleteFoodFromMealsError]: () => false,
});

export default combineReducers({
  meals,
  error,
  loading,
});
