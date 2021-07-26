import { createAction } from '@reduxjs/toolkit';

const fetchFoodRequest = createAction('food/fetchFoodRequest');
const fetchFoodSuccess = createAction('food/fetchFoodSuccess');
const fetchFoodError = createAction('food/fetchFoodError');

const getProhibitedFoodByBloodTypeRequest = createAction(
  'food/getProhibitedFoodByBloodTypeRequest',
);
const getProhibitedFoodByBloodTypeSuccess = createAction(
  'food/getProhibitedFoodByBloodTypeSuccess',
);
const getProhibitedFoodByBloodTypeError = createAction(
  'food/getProhibitedFoodByBloodTypeError',
);

const changeFilter = createAction('food/changeFilter');

const foodActions = {
  fetchFoodRequest,
  fetchFoodSuccess,
  fetchFoodError,
  getProhibitedFoodByBloodTypeRequest,
  getProhibitedFoodByBloodTypeSuccess,
  getProhibitedFoodByBloodTypeError,
  changeFilter,
};

export default foodActions;
