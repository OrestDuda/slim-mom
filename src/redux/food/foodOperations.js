import axios from 'axios';
import notify from '../../services/notify';

import foodActions from './foodActions';
const {
  fetchFoodRequest,
  fetchFoodSuccess,
  fetchFoodError,
  fetchFoodByQueryRequest,
  fetchFoodByQuerySuccess,
  fetchFoodByQueryError,
} = foodActions;

const getFood = () => async dispatch => {
  dispatch(fetchFoodRequest());
  try {
    const { data } = await axios.get('/catalogue');
    dispatch(fetchFoodSuccess(data));
  } catch (error) {
    notify(error.message);
    dispatch(fetchFoodError(error));
  }
};

const getFoodByQuery = query => async dispatch => {
  dispatch(fetchFoodByQueryRequest());
  try {
    const { data } = await axios.get(`/catalogue?search=${query}`);
    dispatch(fetchFoodByQuerySuccess(data));
  } catch (error) {
    notify(error.message);
    dispatch(fetchFoodByQueryError(error));
  }
};

const foodOperations = {
  getFood,
  getFoodByQuery,
};

export default foodOperations;
