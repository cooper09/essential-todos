import { LOAD_VIEWS, loadViewsSuccess, loadViewsFailure } from "../actions/views";

const loadViewsFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    //console.log("middleware - loadViewsFlow - action: ", action )
    next(action);

    if (action.type === LOAD_VIEWS) {
        try {
            const views = await api.views.getViews();
            dispatch(loadViewsSuccess(views));
        } catch (error) {
            console.log("views load failed: ", error )
            alert("Views load failed!")
            dispatch(loadViewsFailure(error));
        }
    }
}

export default [
    loadViewsFlow,
]