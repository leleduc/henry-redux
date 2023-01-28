import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../store/todosSlice';

export const store = configureStore({
  reducer: {
    myTodos: todosReducer,
  },
});

// reducer: {
//   counter: counterReducer,
// },
// });
