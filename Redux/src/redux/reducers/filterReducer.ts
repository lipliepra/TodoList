import { Action, ActionsType } from "../actionsType";

const initialState: string = "all";

const filterReducer = (state = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionsType.TOGGLE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default filterReducer;
