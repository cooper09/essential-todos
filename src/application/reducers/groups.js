import { LOAD_GROUPS_SUCCESS, SET_GROUPS } from "../actions/groups";

const initialState = {
    allGroups: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_GROUPS_SUCCESS:
            console.log("Reducer - contacts SUCCESS");
            return { allGroups: action.payload, error: null };
        case SET_GROUPS:
            console.log("Reducer - contacts SET");
            return { allGroups: action.payload, error: null };
        default:
            return state;
    }
}

export default reducer;