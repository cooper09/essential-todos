import { BUTTON_CLICKED } from "../actions/eventOne";


const buttonClickFlow = ({ log }) => ({ dispatch }) => next => action => {
    //console.log("middleware - buttonClickFlow - action: ", action )
    next(action);
    //alert("Middleware eventOne - buttonClickFlow")
    if (action.type === BUTTON_CLICKED) {
        log('button clicked');
    }
}

export default [
    buttonClickFlow
]