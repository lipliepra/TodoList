export enum ActionsType {
  // sort
  TOGGLE_SORT = "TOGGLE_SORT",
  // filter
  TOGGLE_FILTER = "TOGGLE_FILTER",
  // todos
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  DELETE_COMPLETED_TODOS = "DELETE_COMPLETED_TODOS",
  SET_IMPORTANT = "SET_IMPORTANT",
  SET_COMPLETE = "SET_COMPLETE",
}

export type SortFilterAction = {
  type: ActionsType.TOGGLE_SORT | ActionsType.TOGGLE_FILTER;
  payload: string | boolean;
};

interface AddTodoAction {
  type: ActionsType.ADD_TODO;
  payload: string;
}

interface DeleteTodoAction {
  type: ActionsType.DELETE_TODO;
  payload: { id: string };
}

interface DeleteCompletedTodosAction {
  type: ActionsType.DELETE_COMPLETED_TODOS;
}

interface SetImportantAction {
  type: ActionsType.SET_IMPORTANT;
  payload: { id: string; comp: boolean };
}

interface SetCompleteAction {
  type: ActionsType.SET_COMPLETE;
  payload: { id: string; comp: boolean };
}

export type TodosAction =
  | AddTodoAction
  | DeleteTodoAction
  | DeleteCompletedTodosAction
  | SetImportantAction
  | SetCompleteAction;
