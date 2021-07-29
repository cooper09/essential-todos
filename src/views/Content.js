import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { putTodo } from '../application/actions/todos';
import { getCurrentPage } from '../application/selectors/ui';

import  Tasks  from './Tasks.js';
import  Stocks  from './Stocks.js';

import styled from "styled-components";
import { render } from '@testing-library/react';

const Content = ({data, newData, userData}) => {
    console.log("Content received data: ", data );
    console.log("Content New data: ",  newData );
    console.log("Content User data: ",  userData );

    const dispatch = useDispatch();
    //lets start off with the current page
    const currentPage = useSelector(getCurrentPage);

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
        <h3>Content</h3><span>Current Page: {currentPage}</span>
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

        { currentPage == "Tasks" &&
            <h2>
            <Tasks visible={true} />
            </h2>
        }
        { currentPage == "Stocks" &&
            <h2>
            <Stocks visible={true} />
            </h2>
        }
    </Content>

    </>
    )

}

export default Content