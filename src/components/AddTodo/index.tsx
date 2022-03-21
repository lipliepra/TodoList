import React, { useState } from "react";

import { IAddTodoProps } from "./types";
import "./styles.scss";

const AddTodo: React.FC<IAddTodoProps> = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const addTodoHandler = () => {
    if (title.length && description.length) {
      addTodo(title, description);
      setTitle("");
      setDescription("");
      setMessage("");
    } else {
      setMessage("Add title or description");
    }
  };

  return (
    <div className="addTodo">
      <h2>Add Todo</h2>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button onClick={addTodoHandler}>Add</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddTodo;
