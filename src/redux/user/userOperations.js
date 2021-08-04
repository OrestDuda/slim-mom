import axios from 'axios';
import userActions from './userActions';
import showError from '../../services/helper';
const {
  registerRequest,
  registerSuccess,
  registerError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  loginRequest,
  loginSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  calculateUserRequest,
  calculateUserSuccess,
  calculateUserError,
  publicUserCalculateRequest,
  publicUserCalculateSuccess,
  publicUserCalculateError,
} = userActions;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register =
  ({ email, name, password }) =>
  async dispatch => {
    //Регистрация , входные параметры (почта,имя,пароль)
    const userInfo = { email, name, password };
    dispatch(registerRequest());
    try {
      const response = await axios.post('/users/registration', userInfo);
      token.set(response.data.user.token);
      dispatch(registerSuccess(response.data));
    } catch (error) {
      if (error.response.status === 409) {
        showError(error.response.data.message);
      }
      dispatch(registerError(error.message));
    }
  };

const logIn =
  ({ email, password }) =>
  async dispatch => {
    //логин входные данные (почта,пароль)
    const userInfo = { email, password };
    dispatch(loginRequest());
    try {
      const { data } = await axios.post('/users/login', userInfo);
      token.set(data.user.token);
      dispatch(loginSuccess(data));
    } catch (error) {
      dispatch(loginError(error.message));
    }
  };

const logOut = () => async dispatch => {
  dispatch(logoutRequest());
  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  //Забираем токен из localStorage через getState()

  const persistedTokenOfLoggedUser = getState().user.token;
  if (!persistedTokenOfLoggedUser) {
    return;
  }
  token.set(persistedTokenOfLoggedUser);
  dispatch(getCurrentUserRequest());

  try {
    const { data } = await axios.get('/users/current');

    dispatch(getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

const calculateLoggedInUser =
  ({ height, age, currentWeight, desiredWeight, bloodType }) =>
  async dispatch => {
    const userParameters = {
      height,
      age,
      currentWeight,
      desiredWeight,
      bloodType,
    };
    //Посчитать залогиненого юзера , возвращает всю инфо по юзеру. входные данные (рост,возраст,текущий вес, желаемый вес, тип крови)=параметры передавать отдельно а не одним обьектом

    dispatch(calculateUserRequest());
    try {
      const { data } = await axios.patch(`/calculator`, userParameters);
      dispatch(calculateUserSuccess(data));
    } catch (error) {
      dispatch(calculateUserError(error));
    }
  };

const publicUserCalculate =
  ({ height, age, currentWeight, desiredWeight, bloodType }) =>
  async dispatch => {
    const userParameters = {
      height,
      age,
      currentWeight,
      desiredWeight,
      bloodType,
    };
    //Посчитать публичного юзера , возвращает только кол-во  калорий и нерекомендуемую еду. входные данные (рост,возраст,текущий вес, желаемый вес, тип крови)=параметры передавать отдельно а не одним обьектом

    dispatch(publicUserCalculateRequest());
    try {
      const { data } = await axios.patch(`/public`, userParameters);
      dispatch(publicUserCalculateSuccess(data));
    } catch (error) {
      dispatch(publicUserCalculateError(error));
    }
  };

const userOperations = {
  register,
  logIn,
  logOut,
  getCurrentUser,
  calculateLoggedInUser,
  publicUserCalculate,
};

export default userOperations;
