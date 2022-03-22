import React, { useState } from "react";

import { IAddTodoProps } from "./types";
import "./styles.scss";

const AddTodo: React.FC<IAddTodoProps> = ({ addTodo }) => {
  const [description, setDescription] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const addTodoHandler = () => {
    if (description) {
      addTodo(description);
      setDescription("");
      setMessage("");
    } else {
      setMessage("Add description");
    }
  };

  return (
    <div className="addTodo">
      <h2 className="addTodo__title">Add Todo</h2>
      <div className="addTodo__form">
        <span>Description</span>
        <input
          className="addTodo__input"
          value={description}
          placeholder="Add description..."
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <button className="addTodo__button" onClick={addTodoHandler}>
        Add
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddTodo;
