import React, { useEffect } from 'react';
import styled from "styled-components";

const Header = () => {
    const Header = styled.section`
        padding: 2em;
        background: papayawhip;
        `;

    return(
        <>
        <Header>
            <h3 className="header">Header</h3>
        </Header>
        </>
    )

}

export default Header