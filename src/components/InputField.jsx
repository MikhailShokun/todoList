import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../app/todos/todoSlice";

const InputField = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const addTask = () => {
        if (text.trim().length) {
            dispatch(addTodo({text}))
        }
        setText('')
    }

    return (
        <label>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={addTask}>Add Todo</button>
        </label>
    );
};

export default InputField;