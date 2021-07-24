import { LOAD_STOCKS_SUCCESS, SET_STOCKS } from "../actions/stocks";

const initialState = {
    allStocks: [],
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_STOCKS_SUCCESS:
            console.log("Reducer - stocks SUCCESS");
            return { allStocks: action.payload, error: null };
        case SET_STOCKS:
            console.log("Reducer - stocks SET");
            return { allStocks: action.payload, error: null };
        default:
            return state;
    }
}

export default reducer;