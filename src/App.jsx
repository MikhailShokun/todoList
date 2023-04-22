import React, {useState} from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

const App = () => {

    return (
        <div className={'App'}>
            <InputField />

            <TodoList/>
            
        </div>
    );
};

export default App;

