import axios from 'axios';
import notify from '../../services/notify';
import contactsActions from './contactsActions';
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
} = contactsActions;

const checkIfContactExists = (contacts, newContact) => {
  const contactFound = contacts.find(
    contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
  );
  if (contactFound !== undefined) {
    notify(`${newContact.name} is already in contacts`);
    return true;
  }
  return false;
};

//axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    notify(error.message);
    dispatch(fetchContactsError(error));
  }
};

const addNewContact = (name, number) => dispatch => {
  const newContact = {
    name,
    number,
  };
  dispatch(addContactRequest());
  axios
    .get('/contacts')
    .then(response => {
      const oldContacts = response.data;
      if (checkIfContactExists(oldContacts, newContact) === true) return;
      axios
        .post('/contacts', newContact)
        .then(({ data }) => dispatch(addContactSuccess(data)));
    })
    .catch(error => {
      notify(error.message);
      dispatch(addContactError(error));
    });
};

const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    notify(error.message);
    dispatch(deleteContactError(error));
  }
};

const contactsOperations = {
  deleteContact,
  addNewContact,
  fetchContacts,
};
export default contactsOperations;
