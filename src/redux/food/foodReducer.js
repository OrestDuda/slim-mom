import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import foodActions from './foodActions';
const {
  fetchFoodRequest,
  fetchFoodSuccess,
  fetchFoodError,
  changeFilter,
  fetchFoodByQueryRequest,
  fetchFoodByQuerySuccess,
  fetchFoodByQueryError,
  cleanState,
} = foodActions;

const food = createReducer([], {
  [fetchFoodSuccess]: (_, { payload }) => payload,
  [fetchFoodByQuerySuccess]: (_, { payload }) => payload,
  [cleanState]: (state, { payload }) => {
    return (state = []);
  },
});

const foodFilter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchFoodRequest]: () => true,
  [fetchFoodSuccess]: () => false,
  [fetchFoodError]: () => false,
  [fetchFoodByQueryRequest]: () => true,
  [fetchFoodByQueryError]: () => false,
  [fetchFoodByQuerySuccess]: () => false,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [fetchFoodError]: setError,
  [fetchFoodError]: setError,
});

export default combineReducers({
  food,
  foodFilter,
  loading,
  error,
});
