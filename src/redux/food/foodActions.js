import { createAction } from '@reduxjs/toolkit';

const fetchFoodRequest = createAction('food/fetchFoodRequest');
const fetchFoodSuccess = createAction('food/fetchFoodSuccess');
const fetchFoodError = createAction('food/fetchFoodError');

const fetchFoodByQueryRequest = createAction('food/fetchFoodQueryRequest');
const fetchFoodByQuerySuccess = createAction('food/fetchFoodQuerySuccess');
const fetchFoodByQueryError = createAction('food/fetchFoodQueryError');

const changeFilter = createAction('food/changeFilter');
const cleanState = createAction('food/cleanState');

const foodActions = {
  fetchFoodRequest,
  fetchFoodSuccess,
  fetchFoodError,
  changeFilter,
  fetchFoodByQueryRequest,
  fetchFoodByQuerySuccess,
  fetchFoodByQueryError,
  cleanState,
};

export default foodActions;
