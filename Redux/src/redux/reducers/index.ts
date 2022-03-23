import { combineReducers } from "redux";

import sortReducer from "./sortReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  sort: sortReducer,
  filter: filterReducer,
});

export default rootReducer;
