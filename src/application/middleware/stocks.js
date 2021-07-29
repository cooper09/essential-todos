import { LOAD_STOCKS, loadStocksSuccess, loadStocksFailure } from "../actions/stocks";

const loadStocksFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    //console.log("middleware - loadStocksFlow - action: ", action )
    next(action);

    if (action.type === LOAD_STOCKS) {
        try {
            const stocks = await api.stocks.getStocks();
            dispatch(loadStocksSuccess(stocks));
        } catch (error) {
            console.log("groups load failed: ", error )
            alert("Stocks load failed!")
            dispatch(loadStocksFailure(error));
        }
    }
}


export default [
    loadStocksFlow,
]