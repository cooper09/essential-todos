import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buttonClicked } from '../application/actions/eventOne';
import styled from "styled-components";

const Sidebar = () => {
    const dispatch = useDispatch();

    const Sidebar = styled.section`
    padding: 1em;
    background: aqua;
    width:25%;
    height:100vh;
    `;

    const dataObj = {
        data: "more data",
        test:"passed"
    }
    
    return(
        <Sidebar>
            <h3>Sidebar</h3>
            <button onClick={() => dispatch(buttonClicked(dataObj))}>Click Me</button>  
        </Sidebar>
    )
}

export default Sidebar