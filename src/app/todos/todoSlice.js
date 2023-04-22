import {createSlice} from '@reduxjs/toolkit';

const TodoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            })
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo=> todo.id !== action.payload.id)
        },
        toggleTodoComplete: (state, action) => {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        }
    },
    extraReducers: {},
});

export const {addTodo, removeTodo, toggleTodoComplete} = TodoSlice.actions;

export default TodoSlice.reducer;
