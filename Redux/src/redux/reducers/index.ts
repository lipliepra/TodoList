import { combineReducers } from "redux";

import todosReducer from "./todosReducer";
import sortReducer from "./sortReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  sort: sortReducer,
  filter: filterReducer,
});

export default rootReducer;
