import { combineReducers } from 'redux';
import ui from './ui';
import todos from './todos';
import eventOne from './eventOne';

export default combineReducers({
    ui,
    todos,
    eventOne
})