import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface ITodo {
  id: string;
  title: string;
  description: string;
  isImportant: boolean;
  isComplete: boolean;
}

const testData = [
  {
    id: uuidv4(),
    title: "Task 1",
    description: "Create TodoApp",
    isImportant: true,
    isComplete: false,
  },
  {
    id: uuidv4(),
    title: "Task 2",
    description: "Drink coffee",
    isImportant: false,
    isComplete: false,
  },
  {
    id: uuidv4(),
    title: "Task 3",
    description: "Play with Pusha",
    isImportant: false,
    isComplete: true,
  },
];

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
          title: `Task ${list.length + 1}`,
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
      state = initialState;
    },

    deleteTodo(state, action: PayloadAction<{ id: string }>) {
      const todo = state.findIndex((todo) => todo.id === action.payload.id);
      state.splice(todo, 1);
    },
  },
});

export const { addTodo, setComplete, setImportant, deleteTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
