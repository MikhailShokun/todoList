import {createSlice} from '@reduxjs/toolkit';
import {fetchTodos, asyncAddTodo, asyncDeleteTodo, asyncToggleTodo} from "./asyncActions";

const errorHelper = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

const TodoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo=> todo.id !== action.payload)
        },
        toggleTodoComplete: (state, action) => {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload);
            toggledTodo.completed = !toggledTodo.completed;
        }
    },
    extraReducers: {
        [fetchTodos.pending]: (state) => {
            state.status = 'loading';
            state.error = null
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.todos = action.payload;
        },
        [fetchTodos.rejected]: errorHelper,
        [asyncAddTodo.rejected]: errorHelper,
        [asyncDeleteTodo.rejected]: errorHelper,
        [asyncToggleTodo.rejected]: errorHelper,
    },
});

export const {addTodo, removeTodo, toggleTodoComplete} = TodoSlice.actions;

export default TodoSlice.reducer;
