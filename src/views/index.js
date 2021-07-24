import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Actions
import { pageLoaded } from '../application/actions/ui';
import { loadUsers } from '../application/actions/users';
import { putTodo } from '../application/actions/todos';

//Selectors
import { getTodos } from '../application/selectors/todos';
import { getUsers } from '../application/selectors/users';
import { getLoading } from '../application/selectors/ui';

//cooper's goodies
import  Header  from './Header.js';
import  Sidebar  from './Sidebar.js';
import  Content  from './Content.js';
import { buttonClicked } from '../application/selectors/eventOne';

export default () => {
    const dispatch = useDispatch();
    const todos = useSelector(getTodos);
    const users = useSelector(getUsers);
    const loading = useSelector(getLoading);
    const storeData = useSelector(buttonClicked)

    useEffect(() => {
        dispatch(pageLoaded);
    }, [dispatch]);


    const showUsers = (user) =>{
        users.map(()=>{
            console.log("Our users: ", user )
        })
    }

    return (
        <>
        
            <Header />
            <Sidebar />
            <Content data={todos} newData={storeData} userData = {users}/>
        </>
    )
}
