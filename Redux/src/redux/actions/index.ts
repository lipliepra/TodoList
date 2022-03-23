import { ISortAction, ActionsType } from "../actionsType";
import { Dispatch } from "redux";

export const toogleSort = (value: boolean) => {
  return (dispatch: Dispatch<ISortAction>) => {
    dispatch({ type: ActionsType.TOGGLE_SORT, payload: value });
  };
};
