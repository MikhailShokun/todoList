import React from 'react';
import {useDispatch} from "react-redux";
import {asyncDeleteTodo, asyncToggleTodo} from "../app/todos/asyncActions";

const TodoItem = ({id, title, completed}) => {
    const dispatch = useDispatch();

    return (
        <li key={id}>
            <input
                onChange={() => dispatch(asyncToggleTodo(id))}
                type='checkbox'
                checked={completed}
            />
            <span>{title}</span>
            <span className={'delete'}
                  onClick={() => dispatch(asyncDeleteTodo(id))} >
                            &times;
                        </span>
        </li>
    );
};

export default TodoItem;