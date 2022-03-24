import { TodosAction, ActionsType } from "../actionsType";
import { ITodo } from "../../helpers/types";
import { testData } from "../../helpers/testData";
import { v4 as uuidv4 } from "uuid";

const initialState: ITodo[] = testData;

const todosReducer = (state = initialState, action: TodosAction) => {
  const { type } = action;

  switch (type) {
    case ActionsType.ADD_TODO:
      const newTodo: ITodo = {
        id: uuidv4(),
        number: `Task ${state.length + 1}`,
        description: action.payload,
        isImportant: false,
        isComplete: false,
      };
      return [...state, newTodo];

    case ActionsType.DELETE_TODO:
      const todos = state.filter((todo) => todo.id !== action.payload.id);
      return todos;

    case ActionsType.DELETE_COMPLETED_TODOS:
      const filteredTodos = state.filter((todo) => todo.isComplete === false);
      return filteredTodos;

    case ActionsType.SET_IMPORTANT:
      const isImptodo = state.find((todo) => todo.id === action.payload.id);
      isImptodo!.isImportant = !isImptodo!.isImportant;
      return [...state];

    case ActionsType.SET_COMPLETE:
      const isComptodo = state.find((todo) => todo.id === action.payload.id);
      isComptodo!.isComplete = !isComptodo!.isComplete;
      
      return [...state];

    default:
      return state;
  }
};

export default todosReducer;
