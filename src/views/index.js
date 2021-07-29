import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Actions
import { pageLoaded } from '../application/actions/ui';
//import { loadUsers } from '../application/actions/users';
//import { putTodo } from '../application/actions/todos';
//import { putContacts } from '../application/actions/contacts';
//Selectors
import { getTodos } from '../application/selectors/todos';
import { getUsers } from '../application/selectors/users';
//import { getLoading } from '../application/selectors/ui';
import { buttonClicked } from '../application/selectors/eventOne';
import { getContacts } from '../application/selectors/contacts';
import { getGroups } from '../application/selectors/groups';
import { getLists } from '../application/selectors/lists';
import { getStocks } from '../application/selectors/stocks';
import { getTasks } from '../application/selectors/tasks';
import { getViews } from '../application/selectors/views';

import { getCurrentPage } from '../application/selectors/ui';

//Function Modules
import  Header  from './Header.js';
import  Sidebar  from './Sidebar.js';
import  Content  from './Content.js';

export default () => {
    const dispatch = useDispatch();
    //const loading = useSelector(getLoading);
    const todos = useSelector(getTodos);
    const users = useSelector(getUsers);

    const eventData = useSelector(buttonClicked)

    console.log("Index - Current page: ", getCurrentPage)

    //Get all state data at once
    const contacts =  useSelector(getContacts);
    const groups = useSelector(getGroups);
    const lists = useSelector(getLists);
    const stocks = useSelector(getStocks);
    const tasks = useSelector(getTasks);
    const views = useSelector(getViews);

    //lets start off with the current page
    //const currentPage = useSelector(getCurrentPage);

    useEffect(() => {
        dispatch(pageLoaded);
    }, [dispatch]);


    return (
        <>  
            <Header contacts = {contacts}/>
            <Sidebar groups={groups} lists={lists} views={views}/>
            <Content data={todos} newData={eventData} userData = {users}/>
        </>
    )
}
