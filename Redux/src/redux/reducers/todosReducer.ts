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
    default:
      return state;
  }
};

export default todosReducer;
