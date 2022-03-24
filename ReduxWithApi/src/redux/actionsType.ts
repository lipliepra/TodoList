export enum ActionsType {
  // sort
  TOGGLE_SORT = "TOGGLE_SORT",
  // filter
  TOGGLE_FILTER = "TOGGLE_FILTER",
  //loading
  TOGGLE_LOADING = "TOGGLE_LOADING",
  // todos
  GET_TODOS = "GET_TODOS",
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

export type LoadingAction = {
  type: ActionsType.TOGGLE_LOADING;
  payload: boolean;
};

interface GetTodosAction {
  type: ActionsType.GET_TODOS;
  payload: [];
}

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

interface SetCompleteAction {
  type: ActionsType.SET_COMPLETE;
  payload: { id: string };
}

export type TodosAction =
  | GetTodosAction
  | AddTodoAction
  | DeleteTodoAction
  | DeleteCompletedTodosAction
  | SetCompleteAction;
