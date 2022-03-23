export const ADD_TODO = "todos/add";

export enum ActionsType {
  TOGGLE_SORT = "TOGGLE_SORT",
  TOGGLE_FILTER = "TOGGLE_FILTER",
}

export interface ISortAction {
  type: string;
  payload: boolean;
}

export interface IFilterAction {
  type: string;
  payload: string;
}

export type Action = ISortAction | IFilterAction;
