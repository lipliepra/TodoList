import React from "react";

import { IDeleteTodosProps } from "./types";
import "./styles.scss";

const DeleteTodos: React.FC<IDeleteTodosProps> = ({ onClick }) => {
  return (
    <div className="deleteTodos">
      <div className="deleteTodos__label">Delete all completed todos?</div>
      <button className="deleteTodos__button" onClick={onClick}>Delete</button>
    </div>
  );
};

export default DeleteTodos;
