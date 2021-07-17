import { BUTTON_CLICKED } from "../actions/eventOne";
import * as todosActions from '../actions/todos';

const buttonClickFlow = ({ log }) => ({ dispatch }) => next => action => {
    console.log("middleware - buttonClickFlow - action: ", action )
    next(action);
    alert("buttonClickFlow")
    if (action.type === BUTTON_CLICKED) {
        log('button clicked');
        dispatch(eventOne.buttonClicked);
    }
}

export default [
    buttonClickFlow
]