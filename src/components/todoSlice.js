import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, text: "Going Gym" },
  { id: 2, text: "Study" },
  { id: 3, text: "Read a book before bed" },
  { id: 4, text: "Dr appointment at 6 PM" },
];
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      //   console.log(action.payload);
      return state.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
