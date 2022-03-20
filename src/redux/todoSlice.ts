import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface ITodo {
  id: string;
  text: string;
  completed: boolean;
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
      prepare: (text: string) => ({
        payload: {
          id: uuidv4(),
          text,
          completed: false,
        } as ITodo,
      }),
    },
      deleteTodo(state, action: PayloadAction<{ id: string }>) {
        console.log(state);
        
        const index = state.find((todo) => todo.id === action.payload.id);
        console.log(index);
        
    //   state.splice(index, 1);
    },
    changeStatus(
      state,
      action: PayloadAction<{ completed: boolean; id: string }>
    ) {
      const updatedTodo = state.find((todo) => todo.id === action.payload.id);
      updatedTodo!.completed = action.payload.completed;
    },
  },
});

export const { addTodo, deleteTodo, changeStatus } = todoSlice.actions;
export default todoSlice.reducer;
