export const LOAD_CONTACTS = '[COMTACTS] load';
export const LOAD_CONTACTS_SUCCESS = '[CONTACTS] load success';
export const LOAD_CONTACTS_FAILURE = '[CONTACTS] load failure';
export const SET_CONTACTS = '[CONTACTS] set';
export const PUT_CONTACT = '[CONTACTS] put';

export const loadContacts = {
    type: LOAD_CONTACTS,
};

/*
export const loadUsersSuccess = users => ({
    type: LOAD_USERS_SUCCESS,
    payload: users
});

export const loadUsersFailure = error => ({
    type: LOAD_USERS_FAILURE,
    payload: error,
});

export const setUsers = users => ({
    type: SET_USERS,
    payload: users,
});

export const putTodo = user => ({
    type: PUT_USER,
    payload: user,
});
*/