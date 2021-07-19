import { BUTTON_CLICKED, buttonClicked } from "../actions/eventOne";
import * as todosActions from '../actions/todos';

const buttonClickFlow = ({ log }) => ({ dispatch }) => next => action => {
    console.log("middleware - buttonClickFlow - action: ", action )
    next(action);
    //alert("Middleware eventOne - buttonClickFlow")
    if (action.type === BUTTON_CLICKED) {
        log('button clicked');
    }
}

export default [
    buttonClickFlow
]