export const LOAD_GROUPS = '[COMTACTS] load';
export const LOAD_GROUPS_SUCCESS = '[GROUPS] load success';
export const LOAD_GROUPS_FAILURE = '[GROUPS] load failure';
export const SET_GROUPS = '[GROUPS] set';
export const PUT_CONTACT = '[GROUPS] put';

export const loadGroups = {
    type: LOAD_GROUPS,
};

export const loadGroupsSuccess = groups => ({
    type: LOAD_GROUPS_SUCCESS,
    payload: groups
});

export const loadGroupsFailure = error => ({
    type: LOAD_GROUPS_FAILURE,
    payload: error,
});
