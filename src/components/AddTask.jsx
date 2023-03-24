import React, { useState } from "react";

const AddTask = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
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
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">add task</button>
        
      </form>
    </div>
  );
};

export default AddTask;
