import { combineReducers } from "redux";

import sortReducer from "./sortReducer";

const rootReducer = combineReducers({
  sort: sortReducer,
});

export default rootReducer;
