import axios from 'axios';
import notify from '../../services/notify';
import { useSelector } from 'react-redux';
import userSelectors from './userSelectors';

import userActions from './userActions';
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
  addUserInfoRequest,
  addUserInfoSuccess,
  addUserInfoError,
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
      notify(error.message);
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
      notify(error.message);
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
    notify(error.message);
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
    notify(error.message);
    dispatch(getCurrentUserError(error.message));
  }
};

// const saveUserParameters =
//   (height, age, currentWeight, desiredWeight, bloodType) => async dispatch => {
//     const userParameters = {
//       height,
//       age,
//       currentWeight,
//       desiredWeight,
//       bloodType,
//     };
//
//     const userId = useSelector(userSelectors.getUserId);
//
//     dispatch(addUserInfoRequest());
//     try {
//       await axios.patch(`/users/${userId}`, userParameters);
//       dispatch(addUserInfoSuccess());
//     } catch (error) {
//       notify(error.message);
//       dispatch(addUserInfoError(error));
//     }
//   };

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
      notify(error.message);
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
      notify(error.message);
      dispatch(publicUserCalculateError(error));
    }
  };

const userOperations = {
  register,
  logIn,
  logOut,
  getCurrentUser,
  // saveUserParameters,
  calculateLoggedInUser,
  publicUserCalculate,
};

export default userOperations;
