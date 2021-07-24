import React, { useEffect } from 'react';
import styled from "styled-components";

const Header = ({contacts}) => {

    console.log("Header contacts: ", Object.values(contacts) );

    let contactData = [];

    contacts.map( contact => {
        console.log("Header contacts: ", contact )
        contactData.push(Object.values(contact));
    })

    let contactName = contactData[0];

    const Header = styled.section`
        padding: 2em;
        background: papayawhip;
        `;

    return(
        <>
        <Header>
            <h3 className="Header">Header</h3>
            {contactName}
        </Header>
        </>
    )

}

export default Header