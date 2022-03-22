import React from "react";

import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Tabs from "./components/Tabs";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import {
  addTodo,
  setComplete,
  setImportant,
  deleteTodo,
} from "./redux/todoSlice";
import { setFilterType } from "./redux/filterSlice";

const App: React.FC = () => {
  const todoList = useSelector((state: RootState) => state.todo);
  const filter = useSelector((state: RootState) => state.filter);
  const sort = useSelector((state: RootState) => state.sort);
  const dispatch = useDispatch<AppDispatch>();

  const tabs = [
    { text: "All", value: "all" },
    { text: "Active", value: "active" },
    { text: "Important", value: "important" },
    { text: "Completed", value: "completed" },
  ];

  let list: any = [];

  switch (filter) {
    case "all":
      list = todoList;
      break;
    case "active":
      list = todoList.filter((todo) => todo.isComplete === false);
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
        </div>
      </div>
    </div>
  );
};

export default App;
