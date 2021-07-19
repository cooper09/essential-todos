import { combineReducers } from 'redux';
import ui from './ui';
import todos from './todos';
import eventOne from './eventOne';
import users from './users'

export default combineReducers({
    ui,
    todos,
    eventOne,
    users
})