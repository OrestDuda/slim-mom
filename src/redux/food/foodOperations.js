import axios from 'axios';
import notify from '../../services/notify';

import foodActions from './foodActions';
const {
  fetchFoodRequest,
  fetchFoodSuccess,
  fetchFoodError,
  getProhibitedFoodByBloodTypeRequest,
  getProhibitedFoodByBloodTypeSuccess,
  getProhibitedFoodByBloodTypeError,
} = foodActions;

const getFood = () => async dispatch => {
  dispatch(fetchFoodRequest());
  try {
    const { data } = await axios.get('/food');
    dispatch(fetchFoodSuccess(data));
  } catch (error) {
    notify(error.message);
    dispatch(fetchFoodError(error));
  }
};

const getProhibitedFoodByBloodType = bloodType => async dispatch => {
  dispatch(getProhibitedFoodByBloodTypeRequest());
  try {
    const { data } = await axios.get(`/food/${bloodType}`);
    dispatch(getProhibitedFoodByBloodTypeSuccess(data));
  } catch (error) {
    notify(error.message);
    dispatch(getProhibitedFoodByBloodTypeError(error));
  }
};

const foodOperations = {
  getFood,
  getProhibitedFoodByBloodType,
};

export default foodOperations;
