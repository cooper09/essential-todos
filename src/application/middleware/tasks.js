import { LOAD_TASKS, loadTasksSuccess, loadTasksFailure } from "../actions/tasks";

const loadTasksFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    console.log("middleware - loadTasksFlow - action: ", action )
    next(action);

    if (action.type === LOAD_TASKS) {
        try {
            const tasks = await api.tasks.getTasks();
            dispatch(loadTasksSuccess(tasks));
        } catch (error) {
            console.log("groups load failed: ", error )
            alert("Tasks load failed!")
            dispatch(loadTasksFailure(error));
        }
    }
}


export default [
    loadTasksFlow,
]