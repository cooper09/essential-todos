import { LOAD_VIEWS_SUCCESS, SET_VIEWS } from "../actions/views";

const initialState = {
    allViews: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_VIEWS_SUCCESS:
            console.log("Reducer - views SUCCESS");
            return { allViews: action.payload, error: null };
        case SET_VIEWS:
            console.log("Reducer - Views SET");
            return { allViews: action.payload, error: null };
        default:
            return state;
    }
}

export default reducer;