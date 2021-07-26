import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import foodActions from './foodActions';
const {
  fetchFoodRequest,
  fetchFoodSuccess,
  fetchFoodError,
  getProhibitedFoodByBloodTypeRequest,
  getProhibitedFoodByBloodTypeSuccess,
  getProhibitedFoodByBloodTypeError,
  changeFilter,
} = foodActions;

const food = createReducer([], {
  [fetchFoodSuccess]: (_, { payload }) => payload,
  [getProhibitedFoodByBloodTypeSuccess]: (_, { payload }) => payload,
});

const foodFilter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchFoodRequest]: () => true,
  [fetchFoodSuccess]: () => false,
  [fetchFoodError]: () => false,
  [getProhibitedFoodByBloodTypeRequest]: () => true,
  [getProhibitedFoodByBloodTypeSuccess]: () => false,
  [getProhibitedFoodByBloodTypeError]: () => false,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [fetchFoodError]: setError,
  [getProhibitedFoodByBloodTypeError]: setError,
});

export default combineReducers({
  food,
  foodFilter,
  loading,
  error,
});
