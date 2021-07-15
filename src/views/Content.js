import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { putTodo } from '../application/actions/todos';
import { getTodos } from '../application/selectors/todos';

const Content = ({data}) => {
    console.log("Content received data: ", data );
    const dispatch = useDispatch();
    const todos = useSelector(getTodos);
//    const loading = useSelector(getLoading);
//    useEffect(() => {
//        dispatch(pageLoaded);
//    }, [dispatch]);
    return(
        <>
        <h3>Content</h3>
        <ul>
        {data.map(todo => (
            <li
                key={todo.id}
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                }}
                onClick={() => dispatch(putTodo({...todo, completed: !todo.completed }))}
            >
                {todo.title}
            </li>
        ))}
    </ul>
    </>
    )

}

export default Content