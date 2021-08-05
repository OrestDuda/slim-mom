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
  changeDate,
} = mealsActions;

const initialMeals = { onDay: null, food: [] };
const meals = createReducer(initialMeals, {
  [fetchMealsByDaySuccess]: (state, { payload }) => {
    return payload;
  },
  [addFoodToMealsSuccess]: (state, { payload }) => {
    return { ...state, ...payload.dayJournal };
  },
  [deleteFoodFromMealsSuccess]: (state, action) => {
    return {
      ...state,
      food: state.food.filter(({ _id }) => _id !== action.payload),
    };
  },
});
const date = new Date();
const jsonData = date.toJSON();
const formatData = jsonData.slice(0, 10);

const setDate = createReducer(formatData, {
  [changeDate]: (_, { payload }) => payload,
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
  setDate,
});
