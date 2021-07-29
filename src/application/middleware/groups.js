import { LOAD_GROUPS, loadGroupsSuccess, loadGroupsFailure } from "../actions/groups";

const loadGroupsFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    //console.log("middleware - loadGroupsFlow - action: ", action )
    next(action);

    if (action.type === LOAD_GROUPS) {
        try {
     //       dispatch(uiActions.setLoading(true));
            const groups = await api.groups.getGroups();
              dispatch(loadGroupsSuccess(groups));
     //       dispatch(uiActions.setLoading(false));
        } catch (error) {
            console.log("groups load failed: ", error )
            alert("Groups load failed!")
            dispatch(loadGroupsFailure(error));
        }
    }
}


export default [
    loadGroupsFlow,
]