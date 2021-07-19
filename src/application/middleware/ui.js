import { PAGE_LOADED } from "../actions/ui";
import * as todosActions from '../actions/todos';
import * as userActions from '../actions/users';

const pageLoadedFlow = ({ log }) => ({ dispatch }) => next => action => {
    console.log("middleware - PageLoaderFlow - action: ", action )
    next(action);

    if (action.type === PAGE_LOADED) {
        log('page loaded');
        //alert('page loaded....');
        
        dispatch(userActions.loadUsers);
    }
}

export default [
    pageLoadedFlow
]