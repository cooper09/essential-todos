import { LOAD_LISTS_SUCCESS, SET_LISTS } from "../actions/lists";

const initialState = {
    allLists: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_LISTS_SUCCESS:
            console.log("Reducer - lists SUCCESS");
            return { allLists: action.payload, error: null };
        case SET_LISTS:
            console.log("Reducer - lists SET");
            return { allLists: action.payload, error: null };
        default:
            return state;
    }
}

export default reducer;