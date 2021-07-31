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
const initialMeals = { onDay: null, food: [] };
const meals = createReducer(initialMeals, {
  [fetchMealsByDaySuccess]: (_, { payload }) => payload.dayJournal,
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
