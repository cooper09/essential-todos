export const LOAD_TASKS = '[TASKS] load';
export const LOAD_TASKS_SUCCESS = '[TASKS] load success';
export const LOAD_TASKS_FAILURE = '[TASKS] load failure';
export const SET_TASKS = '[TASKS] set';
export const PUT_CONTACT = '[TASKS] put';

export const loadTasks = {
    type: LOAD_TASKS,
};

export const loadTasksSuccess = tasks => ({
    type: LOAD_TASKS_SUCCESS,
    payload: tasks
});

export const loadTasksFailure = error => ({
    type: LOAD_TASKS_FAILURE,
    payload: error,
});

