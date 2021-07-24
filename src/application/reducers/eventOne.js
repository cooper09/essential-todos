import { BUTTON_CLICKED } from '../actions/eventOne';

const initialState = {
    data: {data: "XYZ"},
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUTTON_CLICKED:
            console.log("EventOne reducer - Button Clicked: ", action.payload)
            return { data: action.payload, error: null };
        default:
            return state;
    }
}

export default reducer;