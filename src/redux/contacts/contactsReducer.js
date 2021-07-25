import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contactsActions';

const {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} = actions;

const defaultContactsValue = [];
const defaultFilterValue = '';

const contacts = createReducer(defaultContactsValue, {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, actions) =>
    state.filter(({ id }) => id !== actions.payload),
});

const contactsFilter = createReducer(defaultFilterValue, {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

export default combineReducers({
  contacts,
  contactsFilter,
  error,
  loading,
});
