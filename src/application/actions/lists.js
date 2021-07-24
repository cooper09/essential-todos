export const LOAD_LISTS = '[LISTS] load';
export const LOAD_LISTS_SUCCESS = '[LISTS] load success';
export const LOAD_LISTS_FAILURE = '[LISTS] load failure';
export const SET_LISTS = '[LISTS] set';
export const PUT_LIST = '[LISTS] put';

export const loadLists = {
    type: LOAD_LISTS,
};

export const loadListsSuccess = contacts => ({
    type: LOAD_LISTS_SUCCESS,
    payload: contacts
});

export const loadListsFailure = error => ({
    type: LOAD_LISTS_FAILURE,
    payload: error,
});