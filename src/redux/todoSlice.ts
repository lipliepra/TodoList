import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { testData } from "../helpers/testData";
import { ITodo } from "../types";

const initialState: ITodo[] = testData;

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<ITodo>) => {
        state.push(action.payload);
      },
      prepare: (list, description) => ({
        payload: {
          id: uuidv4(),
          number: `Task ${list.length + 1}`,
          description: description,
          isImportant: false,
          isComplete: false,
        } as ITodo,
      }),
    },

    setComplete(state, action: PayloadAction<{ id: string; comp: boolean }>) {
      const todo = state.find((todo) => todo.id === action.payload.id);
      todo!.isComplete = !action.payload.comp;
    },

    setImportant(state, action: PayloadAction<{ id: string; imp: boolean }>) {
      const todo = state.find((todo) => todo.id === action.payload.id);
      todo!.isImportant = !action.payload.imp;
    },

    deleteTodo(state, action: PayloadAction<{ id: string }>) {
      const todo = state.findIndex((todo) => todo.id === action.payload.id);
      state.splice(todo, 1);

      return state;
    },

    deleteAllCompletedTodos(state) {
      const filteredList = state.filter((todo) => todo.isComplete === !true)

      return filteredList;
    },
  },
});

export const {
  addTodo,
  setComplete,
  setImportant,
  deleteTodo,
  deleteAllCompletedTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
