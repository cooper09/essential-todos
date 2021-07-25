import React from 'react';
import styled from "styled-components";

const Stocks = ({visible}) => {

    const Stocks = styled.section`
        padding: 2em;
        background: papayawhip;
        `;  

    if (visible) {
        return(
        <Stocks>
            <h3 className="Stocks">Stocks</h3>
        </Stocks>
        )
    }
    return null;
}//end Stocks

export default Stocks