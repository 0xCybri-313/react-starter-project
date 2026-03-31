import { configureStore } from "@reduxjs/toolkit";
// Import the default export (the reducer) and name it something like todoReducer
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer, // Assign it to a key (like 'todo') in the store
  },
});
