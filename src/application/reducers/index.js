import { combineReducers } from 'redux';
import ui from './ui';
import todos from './todos';
import eventOne from './eventOne';
import users from './users';
import contacts from './contacts';
import groups from './groups';
import lists from './lists';
import stocks from './stocks';
import tasks from './tasks';
import views from './views';

export default combineReducers({
    ui,
    todos,
    eventOne,
    users,
    contacts,
    groups,
    lists,
    stocks,
    tasks,
    views,
})