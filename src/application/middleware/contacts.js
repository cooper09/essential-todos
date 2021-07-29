import { LOAD_CONTACTS, loadContactsSuccess, loadContactsFailure } from "../actions/contacts";

const loadContactsFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    //console.log("middleware - loadConactssFlow - action: ", action )
    next(action);

    if (action.type === LOAD_CONTACTS) {
        try {
     //       dispatch(uiActions.setLoading(true));
            const contacts = await api.contacts.getContacts();
              dispatch(loadContactsSuccess(contacts));
     //       dispatch(uiActions.setLoading(false));
        } catch (error) {
            console.log("contacts load failed: ", error )
            alert("Contacts load failed!")
            dispatch(loadContactsFailure(error));
        }
    }
}


export default [
    loadContactsFlow,
]