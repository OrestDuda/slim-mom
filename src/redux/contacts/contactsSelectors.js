import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getContactsFilter = state => state.contacts.contactsFilter;

const getContacts = state => state.contacts.contacts;

const getFilteredContacts = createSelector(
  [getContacts, getContactsFilter],
  (contacts, contactsFilter) => {
    const normalizedFilter = contactsFilter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);
const contactsSelectors = {
  getContactsFilter,
  getContacts,
  getFilteredContacts,
  getLoading,
};
export default contactsSelectors;
