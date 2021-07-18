import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../application/selectors/todos';
import { pageLoaded } from '../application/actions/ui';
import { putTodo } from '../application/actions/todos';
import { getLoading } from '../application/selectors/ui';

//cooper's goodies
import  Header  from './Header.js';
import  Sidebar  from './Sidebar.js';
import  Content  from './Content.js';
import { buttonClicked } from '../application/selectors/eventOne';

export default () => {
    const dispatch = useDispatch();
    const todos = useSelector(getTodos);
    const loading = useSelector(getLoading);
    const storeData = useSelector(buttonClicked)

    useEffect(() => {
        dispatch(pageLoaded);
    }, [dispatch]);
    return (
        <>

            <Header />
            <Sidebar />
            <Content data={todos} newData={storeData}/>
        </>
    )
}
