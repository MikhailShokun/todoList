import React from 'react';
import {useDispatch} from "react-redux";
import {removeTodo, toggleTodoComplete} from "../app/todos/todoSlice";

const TodoItem = ({id, text, completed}) => {
    const dispatch = useDispatch();

    return (
        <li key={id}>
            <input
                onChange={() => dispatch(toggleTodoComplete({id}))}
                type='checkbox'
                checked={completed}
            />
            <span>{text}</span>
            <span className={'delete'}
                  onClick={() => dispatch(removeTodo({id}))} >
                            &times;
                        </span>
        </li>
    );
};

export default TodoItem;