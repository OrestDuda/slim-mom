import axios from "axios";
import notify from "../../services/notify";
import { useSelector } from "react-redux";
import userSelectors from "./userSelectors";
import userActions from "./userActions";
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
} = userActions;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (userInfo) => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const response = await axios.post("/users/signup", userInfo);
    token.set(response.data.token);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    notify(error.message);
    dispatch(registerError(error.message));
  }
};

const logIn = (userInfo) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const { data } = await axios.post("/users/login", userInfo);
    token.set(data.token);
    dispatch(loginSuccess(data));
  } catch (error) {
    notify(error.message);
    dispatch(loginError(error.message));
  }
};

const logOut = () => async (dispatch) => {
  dispatch(logoutRequest());
  try {
    await axios.post("/users/logout");
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    notify(error.message);
    dispatch(logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  //Забираем токен из localStorage через getState()
  const {
    userInfo: { token: persistedTokenOfLoggedUser },
  } = getState();

  if (!persistedTokenOfLoggedUser) {
    return;
  }

  token.set(persistedTokenOfLoggedUser);
  dispatch(getCurrentUserRequest());

  try {
    const { data } = await axios.get("/users/current");

    dispatch(getCurrentUserSuccess(data));
  } catch (error) {
    notify(error.message);
    dispatch(getCurrentUserError(error.message));
  }
};

// const getUserParameters = (userId) => async (dispatch) => {
//   dispatch(fetchUserInfoRequest());
//   try {
//     const { data } = await axios.get(`/users/${userId}`);
//     dispatch(fetchUserInfoSuccess(data));
//   } catch (error) {
//     notify(error.message);
//     dispatch(fetchUserInfoError(error));
//   }
// };

const saveUserParametersToDB =
  (heigth, age, currentWeight, desiredWeight, bloodType) =>
  async (dispatch) => {
    const userParameters = {
      heigth,
      age,
      currentWeight,
      desiredWeight,
      bloodType,
    };

    const userId = useSelector(userSelectors.getUserId);

    dispatch(addUserInfoRequest());
    try {
      await axios.patch(`/users/${userId}`, userParameters);
      dispatch(addUserInfoSuccess());
    } catch (error) {
      notify(error.message);
      dispatch(addUserInfoError(error));
    }
  };

const userOperations = {
  register,
  logIn,
  logOut,
  getCurrentUser,
  saveUserParametersToDB,
};

export default userOperations;
