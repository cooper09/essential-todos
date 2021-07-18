import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { putTodo } from '../application/actions/todos';
import { getTodos } from '../application/selectors/todos';
import styled from "styled-components";

const Content = ({data, newData }) => {
    console.log("Content received data: ", data );
    console.log("Content New data: ",  newData );
    const dispatch = useDispatch();
    const todos = useSelector(getTodos);

    let stinky = "";
    for (const [key, value] of Object.entries(newData)) {
        console.log("key: "+`${key}: ${value}`);
        stinky = value;
      }

    const Content = styled.section`
    padding: 2em;
    background: pink;
    float: right;
    position: relative;
    top: -35em;
    width: 60%;
    height: 90vh;
    `;
    return(
        <>
        <Content>
        <h3>Content</h3>
        <p>Our Data: {newData.data} </p>
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
    </ul></Content>

    </>
    )

}

export default Content