export const ADD_TODO = "todos/add";

export enum ActionsType {
  TOGGLE_SORT = "TOGGLE_SORT",
}

export interface ISortAction {
  type: string;
  payload: boolean;
}
