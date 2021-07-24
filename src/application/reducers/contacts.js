import { LOAD_CONTACTS_SUCCESS, SET_CONTACTS } from "../actions/contacts";

const initialState = {
    allContacts: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CONTACTS_SUCCESS:
            console.log("Reducer - contacts SUCCESS");
            return { allContacts: action.payload, error: null };
        case SET_CONTACTS:
            console.log("Reducer - contacts SET");
            return { allContacts: action.payload, error: null };
        default:
            return state;
    }
}

export default reducer;