import React, { useState } from "react";

const AddTask = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setHasError(false);
      addTodo({
        text: inputValue,
        completed: false,
      });
      setInputValue("");
    } else {
      setHasError(true);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className={hasError ? "form-input error" : "form-input"}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="type here"
          />

          <button type="submit">add task</button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
