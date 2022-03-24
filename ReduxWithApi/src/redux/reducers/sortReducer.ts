import { SortFilterAction, ActionsType } from "../actionsType";

const initialState: boolean = true;

const sortReducer = (state = initialState, action: SortFilterAction) => {
  const { type, payload } = action;

  switch (type) {
    case ActionsType.TOGGLE_SORT:
      return payload;
    default:
      return state;
  }
};

export default sortReducer;
