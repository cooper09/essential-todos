import { LOAD_LISTS, loadListsSuccess, loadListsFailure } from "../actions/lists";

const loadListsFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    //console.log("middleware - loadListsFlow - action: ", action )
    next(action);

    if (action.type === LOAD_LISTS) {
        try {
            const lists = await api.lists.getLists();
            dispatch(loadListsSuccess(lists));
        } catch (error) {
            console.log("lists load failed: ", error )
            alert("Lists load failed!")
            dispatch(loadListsFailure(error));
        }
    }
}


export default [
    loadListsFlow,
]