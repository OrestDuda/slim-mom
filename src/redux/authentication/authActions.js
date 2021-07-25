import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('authentication/registerRequest');
const registerSuccess = createAction('authentication/registerSuccess');
const registerError = createAction('authentication/registerError');

const loginRequest = createAction('authentication/loginRequest');
const loginSuccess = createAction('authentication/loginSuccess');
const loginError = createAction('authentication/loginError');

const logoutRequest = createAction('authentication/logoutRequest');
const logoutSuccess = createAction('authentication/logoutSuccess');
const logoutError = createAction('authentication/logoutError');

const getCurrentUserRequest = createAction(
  'authentication/getCurrentUserRequest',
);
const getCurrentUserSuccess = createAction(
  'authentication/getCurrentUserSuccess',
);
const getCurrentUserError = createAction('authentication/getCurrentUserError');

const authActions = {
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

export default authActions;
