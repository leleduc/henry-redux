import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'Viec 1',
    complated: false,
  },
  {
    id: 2,
    title: 'Viec 2',
    complated: false,
  },
  {
    id: 3,
    title: 'Viec 3',
    complated: false,
  },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
});

// const postReducer = (state = initialState, action) => {
//   return state;
// };

export default todosSlice.reducer;
