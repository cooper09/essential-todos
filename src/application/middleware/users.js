import { LOAD_USERS, loadUsersSuccess, loadUsersFailure } from "../actions/users";
//import * as uiActions from '../actions/ui';

const loadUsersFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    //console.log("middleware - loadUsersFlow - action: ", action )
    next(action);

    if (action.type === LOAD_USERS) {
    //   alert("Oh my God!!!")
        try {
     //       dispatch(uiActions.setLoading(true));
            const users = await api.users.getUsers();
              dispatch(loadUsersSuccess(users));
     //       dispatch(uiActions.setLoading(false));
        } catch (error) {
        //    alert("Bummer: ", error );
            dispatch(loadUsersFailure(error));
        }
    }
}


export default [
    loadUsersFlow,
]