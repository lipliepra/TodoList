import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";

import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import FilterGroup from "./components/FilterGroup";
import DeleteTodos from "./components/DeleteTodos";

import {
  toggleSort,
  toggleFilter,
  getTodos,
  addTodo,
  deleteTodo,
  deleteCompletedTodos,
  setComplete,
} from "./redux/actions";

import { ITodo } from "./helpers/types";
import { tabs } from "./helpers/tabs";

const App: React.FC = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state: RootState) => state.todos);
  const sort = useSelector((state: RootState) => state.sort);
  const filter = useSelector((state: RootState) => state.filter);
  const isLoading = useSelector((state: RootState) => state.loading);

  useEffect(() => {
    dispatch(getTodos());
  }, [getTodos]);

  let list: ITodo[] = [];

  switch (filter) {
    case "all":
      list = todoList;
      break;
    case "common":
      list = todoList.filter((todo) => todo.completed === false);
      break;
    case "completed":
      list = todoList.filter((todo) => todo.completed === true);
      break;
    default:
      break;
  }

  const setSortHandler = (value: boolean) => dispatch(toggleSort(value));
  const setFilterHandler = (value: string) => dispatch(toggleFilter(value));

  const addTodoHandler = (description: string) => dispatch(addTodo(description));
  const setCompleteHandler = (id: string) => dispatch(setComplete(id));

  const deleteTodoHandler = (id: string) => dispatch(deleteTodo(id));
  const deleteCompletedTodosHandler = () => dispatch(deleteCompletedTodos());

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="container__left">
          <AddTodo addTodo={addTodoHandler} />
          {isLoading && <span className="loading">Loading...</span>}
        </div>
        <div className="container__right">
          <FilterGroup
            tabs={tabs}
            currentType={filter}
            setType={setFilterHandler}
            sort={sort}
            setSort={setSortHandler}
          />
          <TodoList list={list} sort={sort} setComplete={setCompleteHandler} setDelete={deleteTodoHandler} />
          {filter === "completed" && !!list.length && <DeleteTodos onClick={deleteCompletedTodosHandler} />}
        </div>
      </div>
    </div>
  );
};

export default App;
