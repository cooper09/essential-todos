import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { putTodo } from '../application/actions/todos';
import { getTodos } from '../application/selectors/todos';
import styled from "styled-components";

const Content = ({data, newData, userData }) => {
    console.log("Content received data: ", data );
    console.log("Content New data: ",  newData );
    console.log("Content User data: ",  userData );
    const dispatch = useDispatch();
    const todos = useSelector(getTodos);
    let firstName = "";
    let lastName = "";

    let stinky = "";
    for (const [key, value] of Object.entries(newData)) {
        console.log("key: "+`${key}: ${value}`);
        stinky = value;
      }

    let users = [];

    if (userData) {
        for (const [key1, value1] of Object.entries(userData)) {
            console.log("user data: "+`${key1}: ${value1}`);
            users.push(value1);
        }
    }

    if (users[0]) {
    console.log("Container - users: ",  Object.values(users[0]) )

    let userArr = Object.values(users[0]);
    console.log("Content - User Array: ", userArr[0]);
    firstName = userArr[0];
    lastName = userArr[1];
    }

    console.log("yah: ", Object.values(users))

    
    //const currentUser = users[0].first 

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
        <p>User: {firstName} {lastName}</p>
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