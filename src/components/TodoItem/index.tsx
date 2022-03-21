import React from "react";
import cn from "classnames";

import { Delete, PriorityHigh, Done } from "@mui/icons-material";

import { ITodoItemProps } from "./types";
import "./styles.scss";

const TodoItem: React.FC<ITodoItemProps> = ({
  item,
  setImportant,
  setComplete,
  setDelete,
}) => {
  const { id, title, description, isImportant, isComplete } = item;

  return (
    <div
      className={cn(
        "todoItem",
        isImportant && "todoItem__important",
        isComplete && "todoItem__complete"
      )}
    >
      <div className="todoItem__text">
        <h3 className="todoItem__text-title">{title}</h3>
        <span className="todoItem__text-desc">{description}</span>
      </div>
      <div className="todoItem__buttons">
        <button
          className="todoItem__buttons-important"
          onClick={() => {
            setImportant(id, isImportant);
          }}
          disabled={isComplete}
        >
          <PriorityHigh />
        </button>
        <button
          className="todoItem__buttons-complete"
          onClick={() => {
            setComplete(id, isComplete);
          }}
        >
          <Done />
        </button>
        <button
          className="todoItem__buttons-delete"
          onClick={() => {
            setDelete(id);
          }}
        >
          <Delete />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
