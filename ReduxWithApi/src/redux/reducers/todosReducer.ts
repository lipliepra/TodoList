import { TodosAction, ActionsType } from "../actionsType";
import { ITodo } from "../../helpers/types";
import { testData } from "../../helpers/testData";
import { v4 as uuidv4 } from "uuid";

const initialState: ITodo[] = [];

const todosReducer = (state = initialState, action: TodosAction) => {
  const { type } = action;

  switch (type) {
    case ActionsType.GET_TODOS:
      return action.payload.slice(0, 20);
    
    case ActionsType.ADD_TODO:
      const newTodo: ITodo = {
        id: uuidv4(),
        title: "",
        completed: false,
      };
      return [...state, newTodo];

    case ActionsType.DELETE_TODO:
      const todos = state.filter((todo) => todo.id !== action.payload.id);
      return todos;

    case ActionsType.DELETE_COMPLETED_TODOS:
      const filteredTodos = state.filter((todo) => todo.completed === false);
      return filteredTodos;

    case ActionsType.SET_COMPLETE:
      const isComptodo = state.find((todo) => todo.id === action.payload.id);
      isComptodo!.completed = !isComptodo!.completed;

      return [...state];

    default:
      return state;
  }
};

export default todosReducer;
