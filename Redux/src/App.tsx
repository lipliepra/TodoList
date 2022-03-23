import React from "react";

import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import FilterGroup from "./components/FilterGroup";
import DeleteTodos from "./components/DeleteTodos";

import { tabs } from "./helpers/tabs";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <FilterGroup tabs={tabs} currentType={"all"} setType={() => {}} sort={true} setSort={() => {}} />
      </div>
    </div>
  );
};

export default App;
