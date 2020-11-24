import { CREATE_CONTACT, 
    EDIT_CONTACT, 
    UPDATE_CONTACT, 
    DELETE_CONTACT, 
    SELECT_CONTACT, 
    CLEAR_CONTACT, 
    DELETE_ALL_CONTACTS } from './types';

// create contact action
export const addContact = (contact) => ({
        type: CREATE_CONTACT,
        payload: contact
});
      

// get contact action
export const getContact = (id) => ({
    type: EDIT_CONTACT,
    payload: id
})

export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact
})

export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id
})

export const selectAllContacts = (id) => ({
    type: SELECT_CONTACT,
    payload: id
})

export const clearAllContacts = () => ({
    type: CLEAR_CONTACT
})

export const deleteAllContacts = (payload) => ({
    type: DELETE_ALL_CONTACTS
})




