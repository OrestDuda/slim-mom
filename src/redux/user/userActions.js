import { createAction } from "@reduxjs/toolkit";

const registerRequest = createAction("user/registerRequest");
const registerSuccess = createAction("user/registerSuccess");
const registerError = createAction("user/registerError");

const loginRequest = createAction("user/loginRequest");
const loginSuccess = createAction("user/loginSuccess");
const loginError = createAction("user/loginError");

const logoutRequest = createAction("user/logoutRequest");
const logoutSuccess = createAction("user/logoutSuccess");
const logoutError = createAction("user/logoutError");

const getCurrentUserRequest = createAction("user/getCurrentUserRequest");
const getCurrentUserSuccess = createAction("user/getCurrentUserSuccess");
const getCurrentUserError = createAction("user/getCurrentUserError");

const addUserInfoRequest = createAction("user/addContactRequest");
const addUserInfoSuccess = createAction("user/addContactSuccess");
const addUserInfoError = createAction("user/addContactError");

const userActions = {
  addUserInfoRequest,
  addUserInfoSuccess,
  addUserInfoError,
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
};

export default userActions;
