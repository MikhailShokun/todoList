import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {addTodo, removeTodo, toggleTodoComplete} from "./todoSlice";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/todos/',
    headers: {'Content-Type': 'application/json'}
});

export const fetchTodos = createAsyncThunk(
    'asyncTodos/fetchTodos',
    async function (_, {rejectWithValue}) {

        try {
            const response = await axiosInstance();
            const data = await response.data;
            return data;
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

export const asyncAddTodo = createAsyncThunk(
    'asyncTodos/asyncAddTodo',
    async function (title, {rejectWithValue, dispatch}) {
        try {
            const response = await axiosInstance({
                method: 'post',
                data: {
                    userId: 2,
                    title,
                    completed: false
                }
            })
            const data = await response.data;
            dispatch(addTodo(data))

        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const asyncDeleteTodo = createAsyncThunk(
    'asyncTodos/asyncDeleteTodo',
    async function (id, {rejectWithValue, dispatch}) {
        try {
            const response = await axiosInstance({
                url: `${id}`,
                method: 'delete'
            });
            dispatch(removeTodo(id))
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const asyncToggleTodo = createAsyncThunk(
    'asyncTodos/asyncToggleTodo',
    async function (id, {rejectWithValue, dispatch, getState}) {
        try {
            const todo = getState().todos.todos.find(todo => todo.id === id);
            const response = await axiosInstance({
                url: `${id}`,
                method: 'patch',
                data: {
                    completed: !todo.completed
                }
            })
            const data = await response.data;
            dispatch(toggleTodoComplete(id))
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)
