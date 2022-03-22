import { configureStore } from "@reduxjs/toolkit";
import todos from "./todoSlice";
import filter from "./filterSlice";
import sort from "./sortSlice";

export const store = configureStore({
  reducer: {
    todo: todos,
    filter: filter,
    sort: sort,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
