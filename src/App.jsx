import React, {useEffect} from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import {fetchTodos} from "./app/todos/asyncActions";
import {useDispatch, useSelector} from "react-redux";

const App = () => {
    const dispatch = useDispatch();
    const {error, status} = useSelector(state => state.todos)

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    return (
        <div className={'App'}>
            <InputField/>

            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>An error occurred: {error}</h2>}

            <TodoList/>

        </div>
    );
};

export default App;

