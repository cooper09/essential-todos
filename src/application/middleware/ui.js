import { PAGE_LOADED, SHOW_TASKS, SHOW_STOCKS } from "../actions/ui";
//import * as todosActions from '../actions/todos';
import * as userActions from '../actions/users';
import * as contactActions from '../actions/contacts';
import * as groupActions from '../actions/groups';
import * as listActions from '../actions/lists';
import * as taskActions from '../actions/tasks';
import * as stockActions from '../actions/stocks';
import * as viewActions from '../actions/views';
import {showTasks} from '../actions/ui';

const pageLoadedFlow = ({ log }) => ({ dispatch }) => next => action => {
    console.log("middleware - PageLoaderFlow - action: ", action )
    next(action);

    if (action.type === PAGE_LOADED) {
        log('page loaded');
        //alert('page loaded....');
        
        dispatch(userActions.loadUsers);
        dispatch(contactActions.loadContacts);
        dispatch(groupActions.loadGroups);
        dispatch(listActions.loadLists);
        dispatch(taskActions.loadTasks);
        dispatch(stockActions.loadStocks);
        dispatch(viewActions.loadViews);
    }//end if PAGE_LOADED
}//end pageLoaderFlow

export default [
    pageLoadedFlow
]