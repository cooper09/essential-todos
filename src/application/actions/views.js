export const LOAD_VIEWS = '[VIEWS] load';
export const LOAD_VIEWS_SUCCESS = '[VIEWS] load success';
export const LOAD_VIEWS_FAILURE = '[VIEWS] load failure';
export const SET_VIEWS = '[VIEWS] set';
export const PUT_VIEWS = '[VIEWS] put';

export const loadViews = {
    type: LOAD_VIEWS,
};

export const loadViewsSuccess = users => ({
    type: LOAD_VIEWS_SUCCESS,
    payload: users
});

export const loadViewsFailure = error => ({
    type: LOAD_VIEWS_FAILURE,
    payload: error,
});