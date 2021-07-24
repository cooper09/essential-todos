import { LOAD_TASKS_SUCCESS, SET_TASKS } from "../actions/tasks";

const initialState = {
    allTasks: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TASKS_SUCCESS:
            console.log("Reducer - tasks SUCCESS");
            return { allTasks: action.payload, error: null };
        case SET_TASKS:
            console.log("Reducer - tasks SET");
            return { allTasks: action.payload, error: null };
        default:
            return state;
    }
}

export default reducer;