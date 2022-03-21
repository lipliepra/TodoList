import React from "react";

import TodoItem from "../TodoItem";

import { ITodoListProps } from "./types";
import "./styles.scss";

const TodoList: React.FC<ITodoListProps> = ({
  list,
  setImportant,
  setComplete,
  setDelete,
}) => {
  return (
    <div className="todoList">
      {list.map((item, idx) => {
        return (
          <TodoItem
            key={idx}
            item={item}
            setImportant={(id, imp) => {
              setImportant(id, imp);
            }}
            setComplete={(id, comp) => {
              setComplete(id, comp);
            }}
            setDelete={(id) => {
              setDelete(id);
            }}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
