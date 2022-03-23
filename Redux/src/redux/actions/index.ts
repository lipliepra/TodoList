import { Dispatch } from "redux";
import { SortFilterAction, TodosAction, ActionsType } from "../actionsType";

export const toggleSort = (value: boolean) => {
  return (dispatch: Dispatch<SortFilterAction>) => {
    dispatch({ type: ActionsType.TOGGLE_SORT, payload: value });
  };
};

export const toggleFilter = (value: string) => {
  return (dispatch: Dispatch<SortFilterAction>) => {
    dispatch({ type: ActionsType.TOGGLE_FILTER, payload: value });
  };
};

export const addTodo = (description: string) => {
  return (dispatch: Dispatch<TodosAction>) => {
    dispatch({ type: ActionsType.ADD_TODO, payload: description });
  };
};

export const deleteTodo = (id: string) => {
  return (dispatch: Dispatch<TodosAction>) => {
    dispatch({ type: ActionsType.DELETE_TODO, payload: { id } });
  };
};
