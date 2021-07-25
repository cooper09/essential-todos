import React, { useEffect } from 'react';
import styled from "styled-components";

const Tasks = ({visible}) => {

    console.log("Tasks");

    let taskData = [];


    const Tasks = styled.section`
        padding: 2em;
        background: papayawhip;
        `;
        if (visible) {
            return(
            <Tasks>
                <h3 className="Tasks">Tasks</h3>
            </Tasks>
            )
        }
        return null;

}

export default Tasks