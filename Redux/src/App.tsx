import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";

import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import FilterGroup from "./components/FilterGroup";
import DeleteTodos from "./components/DeleteTodos";

import { toggleSort, toggleFilter, addTodo } from "./redux/actions";

import { ITodo } from "./helpers/types";
import { tabs } from "./helpers/tabs";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state: RootState) => state.todos);
  const sort = useSelector((state: RootState) => state.sort);
  const filter = useSelector((state: RootState) => state.filter);

  let list: ITodo[] = [];

  switch (filter) {
    case "all":
      list = todoList;
      break;
    case "common":
      list = todoList.filter((todo) => todo.isComplete === false && todo.isImportant === false);
      break;
    case "completed":
      list = todoList.filter((todo) => todo.isComplete === true);
      break;
    case "important":
      list = todoList.filter((todo) => todo.isImportant === true);
      break;
    default:
      break;
  }

  const setSortHandler = (value: boolean) => dispatch(toggleSort(value));
  const setFilterHandler = (value: string) => dispatch(toggleFilter(value));

  const addTodoHandler = (description: string) => {
    dispatch(addTodo(description));
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddTodo addTodo={addTodoHandler} />
        <div className="container__right">
          <FilterGroup
            tabs={tabs}
            currentType={filter}
            setType={setFilterHandler}
            sort={sort}
            setSort={setSortHandler}
          />
          <TodoList list={list} sort={sort} setImportant={() => {}} setComplete={() => {}} setDelete={() => {}} />
          {filter === "completed" && list.length > 0 && <DeleteTodos onClick={() => {}} />}
        </div>
      </div>
    </div>
  );
};

export default App;
