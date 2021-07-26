import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import userActions from './userActions';
const {
  registerSuccess,
  registerError,
  logoutSuccess,
  logoutError,
  loginSuccess,
  loginError,
  getCurrentUserSuccess,
  getCurrentUserError,
  addUserInfoSuccess,
  addUserInfoError,
} = userActions;

const initialUser = { name: null, email: null, password: null };

const user = createReducer(initialUser, {
  [registerSuccess]: (_, actions) => actions.payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUser,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
  [addUserInfoSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const loggedIn = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [addUserInfoSuccess]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
  [addUserInfoError]: () => false,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [registerError]: setError,
  [loginError]: setError,
  [logoutError]: setError,
  [getCurrentUserError]: setError,
  [addUserInfoError]: setError,
});

export default combineReducers({
  user,
  error,
  token,
  loggedIn,
});