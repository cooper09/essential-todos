import { LOAD_USERS_SUCCESS, SET_USERS, LOAD_USERS } from "../actions/users";

const initialState = {
    allUsers: [
        {
            user: {
                first: "tom",
                last: "thumb"
            }
        },
        {
            user: {
                first: "tiny",
                last: "tim"
            }
        }
    ],
    error: null
};

const reducer = (state = initialState, action) => {
    console.log("Users reducer = action type: " , action.type)
    switch (action.type) {
        case LOAD_USERS:
            alert("Is this working: " + action.type )
            return { allUsers: action.payload, error: null };
        case LOAD_USERS_SUCCESS:
            return { allUsers: action.payload, error: null };
        case SET_USERS:
            return { allUsers: action.payload, error: null };
        default:
            return state;
    }
}

export default reducer;