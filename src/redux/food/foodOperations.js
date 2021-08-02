import axios from 'axios';
import notify from '../../services/notify';
import foodActions from './foodActions';

let cancelToken;
const {
  fetchFoodRequest,
  fetchFoodSuccess,
  fetchFoodError,
  fetchFoodByQueryRequest,
  fetchFoodByQuerySuccess,
  fetchFoodByQueryError,
} = foodActions;

const getFood = () => async dispatch => {
  // получить весь список еды что есть в базе
  dispatch(fetchFoodRequest());
  try {
    const { data } = await axios.get('/catalogue/all');
    dispatch(fetchFoodSuccess(data.fullCatalogue));
  } catch (error) {
    notify(error.message);
    dispatch(fetchFoodError(error));
  }
};

const getFoodByQuery = query => async dispatch => {
  // поиск еды по квери(условию)

  //Check if there are any previous pending requests
  if (typeof cancelToken != typeof undefined) {
    cancelToken.cancel('Operation canceled due to new request.');
  }
  //Save the cancel token for the current request
  cancelToken = axios.CancelToken.source();
  dispatch(fetchFoodByQueryRequest());
  try {
    const { data } = await axios.get(`/catalogue?search=${query}`, {
      cancelToken: cancelToken.token,
    });
    dispatch(fetchFoodByQuerySuccess(data.results));
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
