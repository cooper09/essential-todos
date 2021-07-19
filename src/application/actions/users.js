export const LOAD_USERS = '[USERS] load';
export const LOAD_USERS_SUCCESS = '[USERS] load success';
export const LOAD_USERS_FAILURE = '[USERS] load failure';
export const SET_USERS = '[USERS] set';
export const PUT_USER = '[USERS] put';

export const loadUsers = {
    type: LOAD_USERS,
};


export const loadUsersSuccess = users => ({
    type: LOAD_USERS_SUCCESS,
    payload: users
});

export const loadUsersFailure = error => ({
    type: LOAD_USERS_FAILURE,
    payload: error,
});
/*
export const setUsers = users => ({
    type: SET_USERS,
    payload: users,
});

export const putTodo = user => ({
    type: PUT_USER,
    payload: user,
});
*/