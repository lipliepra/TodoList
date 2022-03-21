import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface ITodo {
  id: string;
  title: string;
  description: string;
  isImportant: boolean;
  isComplete: boolean;
}

const initialState: ITodo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<ITodo>) => {
        state.push(action.payload);
      },
      prepare: (title: string, description: string) => ({
        payload: {
          id: uuidv4(),
          title,
          description,
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
      const todo = state.findIndex((todo) => todo.id !== action.payload.id);
      state.splice(todo);
    },
  },
});

export const { addTodo, setComplete, setImportant, deleteTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
