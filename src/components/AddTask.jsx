import React, { useState } from "react";

const AddTask = ({ addTodo, todos }) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      setErrorMessage("no empty fields");
    } else if (todos.find((todo) => todo.text === inputValue)) {
      setErrorMessage("this todo already exists");
    } else {
      setErrorMessage("");
      addTodo({
        text: inputValue,
        completed: false,
      });
      setInputValue("");
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className={`form-input ${errorMessage ? "error" : ""}`}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="type here"
          />
          <button type="submit">add task</button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default AddTask;
