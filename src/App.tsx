import React from "react";

import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Tabs from "./components/Tabs";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import {
  addTodo,
  setComplete,
  setImportant,
  deleteTodo,
  deleteAllCompletedTodos,
} from "./redux/todoSlice";
import { setFilterType } from "./redux/filterSlice";
import { setSortType } from "./redux/sortSlice";

import { tabs } from "./helpers/tabs";
import { ITodo } from "./types";

const App: React.FC = () => {
  const todoList = useSelector((state: RootState) => state.todo);
  const filter = useSelector((state: RootState) => state.filter);
  const sort = useSelector((state: RootState) => state.sort);

  const dispatch = useDispatch<AppDispatch>();

  let list: ITodo[] = [];

  switch (filter) {
    case "all":
      list = todoList;
      break;
    case "common":
      list = todoList.filter(
        (todo) => todo.isComplete === false && todo.isImportant === false
      );
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

  const addTodoHandler = (description: string) => {
    dispatch(addTodo(todoList, description));
  };

  const setFilterHandler = (value: string) => dispatch(setFilterType(value));

  const setImportantHandler = (id: string, imp: boolean) => {
    dispatch(setImportant({ id, imp }));
  };

  const setCompleteHandler = (id: string, comp: boolean) => {
    dispatch(setComplete({ id, comp }));
  };

  const deleteHandler = (id: string) => dispatch(deleteTodo({ id }));

  const deleteAllCompletedTodosHandler = () => {
    dispatch(deleteAllCompletedTodos());
    dispatch(setFilterType("all"));
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddTodo addTodo={addTodoHandler} />
        <div className="container__right">
          <Tabs tabs={tabs} currentType={filter} onClick={setFilterHandler} />
          <TodoList
            list={list}
            setImportant={setImportantHandler}
            setComplete={setCompleteHandler}
            setDelete={deleteHandler}
          />
          {filter === "completed" && (
            <div>
              <span>Delete all completed todos?</span>
              <button onClick={deleteAllCompletedTodosHandler}>Delete</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
