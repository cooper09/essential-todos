import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { putTodo } from '../application/actions/todos';

import  Tasks  from './Tasks.js';
import  Stocks  from './Stocks.js';

import styled from "styled-components";

const Content = ({data, newData, userData}) => {
    console.log("Content received data: ", data );
    console.log("Content New data: ",  newData );
    console.log("Content User data: ",  userData );

    const dispatch = useDispatch();
    //const todos = useSelector(getTodos);

    let firstArr = [];
    let lastArr = [];
    let firstName = "";
    let lastName = "";

    if (userData) {
        userData.map(user => {
        console.log("Content user: ", user.first );
        firstArr.push(user.first)
        lastArr.push(user.last)
        })
    }

    console.log("userArr: ", firstArr[0] )
    firstName =   firstArr[0];
    lastName = lastArr[0];

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
    </ul>
    <Tasks visible={true} />
    <Stocks visible={true} />
    </Content>

    </>
    )

}

export default Content