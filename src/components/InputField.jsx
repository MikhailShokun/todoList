import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {asyncAddTodo} from "../app/todos/asyncActions";

const InputField = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const addTask = () => {
        if (text.trim().length) {
            dispatch(asyncAddTodo(text))
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