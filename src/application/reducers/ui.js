import * as uiActions from '../actions/ui';

const initialState = {
    loading: true,
    currentPage: "Content"
}

export default (state = initialState, action) => {
    switch (action.type) {
        case (uiActions.SET_LOADING_ON):
        case (uiActions.SET_LOADING_OFF):
            return { ...state, loading: action.payload };
        case (uiActions.SHOW_TASKS):
            console.log("UI Reducer - Show Tasks: ", action.payload )
            return { ...state, currentPage: action.payload };
        case (uiActions.SHOW_STOCKS):
            return { ...state, currentPage: action.payload };
        default:
            return state;
    }
}