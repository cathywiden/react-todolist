import React from "react";

const DisplayTasks = ({ todos, removeTodo, setTodos }) => {
  const handlePriority = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          priority: !todo.priority,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div className="tasks-container">
      <div className="tasks">
        {todos.map((todo, index) => (
          <div
            key={index}
            className={`task${todo.completed ? " completed" : ""}${
              todo.priority ? " priority" : ""
            }`}
          >
            <button
              className="priority-button"
              onClick={() => handlePriority(todo.id)}
            >
              {todo.priority ? <span>&#x2605;</span> : <span>&#x2606;</span>}
            </button>
            {todo.text}
          </div>
        ))}
      </div>
      <div className="buttons">
        {todos.map((todo, index) => (
          <button
            className="delete-button" key={index} onClick={() => removeTodo(todo.id)}
          >
            X
          </button>
        ))}
      </div>
    </div>
  );
};

export default DisplayTasks;
