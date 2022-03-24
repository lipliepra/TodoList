import { combineReducers } from "redux";

import todosReducer from "./todosReducer";
import sortReducer from "./sortReducer";
import filterReducer from "./filterReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  sort: sortReducer,
  filter: filterReducer,
  loading: loadingReducer,
});

export default rootReducer;
