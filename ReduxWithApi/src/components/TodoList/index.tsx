import React from "react";
import cn from "classnames";

import TodoItem from "../TodoItem";

import { ITodoListProps } from "./types";
import "./styles.scss";

const TodoList: React.FC<ITodoListProps> = ({ list, sort, setComplete, setDelete }) => {
  return (
    <div className={cn("todoList", !sort && "todoList__reverse")}>
      {!!list.length ? (
        list.map((item, idx) => {
          return (
            <TodoItem
              key={idx}
              item={item}
              setComplete={(id) => {
                setComplete(id);
              }}
              setDelete={(id) => {
                setDelete(id);
              }}
            />
          );
        })
      ) : (
        <p>Not found..</p>
      )}
    </div>
  );
};

export default TodoList;
