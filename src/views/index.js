import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Actions
import { pageLoaded } from '../application/actions/ui';
import { loadUsers } from '../application/actions/users';
import { putTodo } from '../application/actions/todos';
import { putContacts } from '../application/actions/contacts';
//Selectors
import { getTodos } from '../application/selectors/todos';
import { getUsers } from '../application/selectors/users';
import { getLoading } from '../application/selectors/ui';
import { buttonClicked } from '../application/selectors/eventOne';
import { getContacts } from '../application/selectors/contacts';

//Function Modules
import  Header  from './Header.js';
import  Sidebar  from './Sidebar.js';
import  Content  from './Content.js';

export default () => {
    const dispatch = useDispatch();
    const todos = useSelector(getTodos);
    const users = useSelector(getUsers);
    const loading = useSelector(getLoading);

    const eventData = useSelector(buttonClicked)

    //Get all state data at once
    const contacts =  useSelector(getContacts);

     try {
            console.log("Index - contacts: ", contacts );
     } catch (e) {
            alert("Lost contact with contacts: ", e )
        }

    useEffect(() => {
        dispatch(pageLoaded);
    }, [dispatch]);


    const showUsers = (user) =>{
        users.map(()=>{
            console.log("Our users: ", user[0] )
        })
    }

    return (
        <>
        
            <Header />
            <Sidebar />
            <Content data={todos} newData={eventData} userData = {users}/>
        </>
    )
}
