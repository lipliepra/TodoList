import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";

import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import FilterGroup from "./components/FilterGroup";
import DeleteTodos from "./components/DeleteTodos";

import { toggleSort, toggleFilter } from "./redux/actions";

import { tabs } from "./helpers/tabs";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const sort = useSelector((state: RootState) => state.sort);
  const filter = useSelector((state: RootState) => state.filter);

  const setSortHandler = (value: boolean) => dispatch(toggleSort(value));
  const setFilterHandler = (value: string) => dispatch(toggleFilter(value));

  return (
    <div className="App">
      <Header />
      <div className="container">
        <FilterGroup tabs={tabs} currentType={filter} setType={setFilterHandler} sort={sort} setSort={setSortHandler} />
      </div>
    </div>
  );
};

export default App;
