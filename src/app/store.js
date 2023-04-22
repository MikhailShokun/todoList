import {
	configureStore,
	// ThunkAction, Action
} from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import TodoReducer from './todos/todoSlice';

export const store = configureStore({
	reducer: {
		todos: TodoReducer,
		// counter: counterReducer,
	},
});

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

