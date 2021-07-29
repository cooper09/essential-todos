export const PAGE_LOADED = '[ui] page loaded';
export const SET_LOADING_ON = '[ui] set loading on';
export const SET_LOADING_OFF = '[ui] set loading off';

export const SHOW_TASKS = '[ui] show tasks';
export const SHOW_STOCKS = '[ui] show stocks';

export const pageLoaded = {
    type: PAGE_LOADED
};

export const setLoading = isLoading => ({
    type: isLoading ? SET_LOADING_ON : SET_LOADING_OFF,
    payload: isLoading,
});

export const showTasks = () => ({
    type: SHOW_TASKS, 
    payload: "Tasks"
});

export const showStocks = () => ({
    type: SHOW_STOCKS, 
    payload: "Stocks"
});