import { configureStore } from "@reduxjs/toolkit";
import todos from "./redux/todoSlice";
import filter from "./redux/filterSlice";
import sort from "./redux/sortSlice";

export const store = configureStore({
  reducer: {
    todo: todos,
    filter: filter,
    sort: sort,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
