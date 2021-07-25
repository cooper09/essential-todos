export const LOAD_STOCKS = '[STOCKS] load';
export const LOAD_STOCKS_SUCCESS = '[STOCKS] load success';
export const LOAD_STOCKS_FAILURE = '[STOCKS] load failure';
export const SET_STOCKS = '[STOCKS] set';
export const PUT_STOCK = '[STOCKS] put';

export const loadStocks = {
    type: LOAD_STOCKS,
};

export const loadStocksSuccess = stocks => ({
    type: LOAD_STOCKS_SUCCESS,
    payload: stocks
});

export const loadStocksFailure = error => ({
    type: LOAD_STOCKS_FAILURE,
    payload: error,
});
