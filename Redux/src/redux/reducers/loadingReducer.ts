import { LoadingAction, ActionsType } from "../actionsType";

const initialState: boolean = false;

const loadingReducer = (state = initialState, action: LoadingAction) => {
  const { type, payload } = action;

  switch (type) {
    case ActionsType.TOGGLE_LOADING:
      return payload;
    default:
      return state;
  }
};

export default loadingReducer;
