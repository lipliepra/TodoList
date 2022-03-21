import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface ITodo {
  id: string;
  title: string;
  description: string;
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
      prepare: (title: string, description: string) => ({
        payload: {
          id: uuidv4(),
          title,
          description,
          completed: false,
        } as ITodo,
      }),
    },
      deleteTodo(state, action: PayloadAction<{ id: string }>) {
        console.log(state);
        
      state.filter((todo) => todo.id !== action.payload.id);

    //   console.log(index);
    //   state!.splice(index)
    },
    changeComplete(
      state,
      action: PayloadAction<{ completed: boolean; id: string }>
    ) {
      const updatedTodo = state.find((todo) => todo.id === action.payload.id);
      console.log(updatedTodo);

      updatedTodo!.completed = action.payload.completed;
    },
  },
});

export const { addTodo, deleteTodo, changeComplete } = todoSlice.actions;
export default todoSlice.reducer;
