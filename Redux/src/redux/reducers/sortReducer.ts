import { Action, ActionsType } from "../actionsType";

const initialState: boolean = true;

const sortReducer = (state = initialState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionsType.TOGGLE_SORT:
      return payload;
    default:
      return state;
  }
};

export default sortReducer;
