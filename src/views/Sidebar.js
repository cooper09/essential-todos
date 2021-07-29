import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buttonClicked } from '../application/actions/eventOne';
import { showTasks, showStocks } from '../application/actions/ui';
import styled from "styled-components";

const Sidebar = ({groups, lists, views}) => {
    
    console.log("Sidebar groups: ", Object.values(groups) );
    console.log("Sidebar lists: ", lists );
    console.log("Sidebar views: ", views );
    
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

    //Set up page handling
    // Simple Modal to start

    const [currentPage, setCurrentPage] = useState("");
    useEffect(()=>{
        console.log("App...current page: ", currentPage )
    }, [currentPage])

 
    const [modalState, setModalState] = useState(false);
        const manageState = () => {
    setModalState(!modalState)
  }

    useEffect(()=>{
        console.log("App...visibility change: ", modalState)
    }, [modalState])
    
    return(
        <Sidebar>
            <h3>Sidebar</h3>
            <button onClick={() => dispatch(buttonClicked(dataObj))}>Click Me</button> 
            <div>
            <button onClick={() => dispatch(showTasks({currentPage}))}>Tasks</button><br/> 
            <button onClick={() => dispatch(showStocks({currentPage}))}>Stocks</button>    
            </div> 
        </Sidebar>
    )
}

export default Sidebar