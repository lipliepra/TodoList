import { Action, ActionsType } from "../actionsType";
import { Dispatch } from "redux";

export const toggleSort = (value: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionsType.TOGGLE_SORT, payload: value });
  };
};

export const toggleFilter = (value: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionsType.TOGGLE_FILTER, payload: value });
  };
};
