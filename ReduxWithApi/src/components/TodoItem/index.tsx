import React from "react";
import cn from "classnames";

import { Delete, PriorityHigh, Done } from "@mui/icons-material";

import { ITodoItemProps } from "./types";
import "./styles.scss";

const TodoItem: React.FC<ITodoItemProps> = ({ item, setComplete, setDelete }) => {
  const { id, title, completed } = item;

  return (
    <div className={cn("todoItem", completed && "todoItem__complete")}>
      <div className="todoItem__text">
        <h3 className="todoItem__text-title">Todo {id}</h3>
        <span className="todoItem__text-desc">{title}</span>
      </div>
      <div className="todoItem__buttons">
        <button
          title="set complete"
          className="todoItem__buttons-complete"
          onClick={() => {
            setComplete(id);
          }}
        >
          <Done fontSize="small" />
        </button>
        <button
          title="delete"
          className="todoItem__buttons-delete"
          onClick={() => {
            setDelete(id);
          }}
        >
          <Delete fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
