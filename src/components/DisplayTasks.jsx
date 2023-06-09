import React from "react";

const DisplayTasks = ({
  todos,
  removeTodo,
  setTodos,
  originalTodos,
  setOriginalTodos,
}) => {
  const updateTodosAndLocalStorage = (updatedTodos, updatedOriginalTodos) => {
    setTodos(updatedTodos);
    setOriginalTodos(updatedOriginalTodos);
    localStorage.setItem("originalTodos", JSON.stringify(updatedOriginalTodos));
  };
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

  const handleCompletion = (id) => {
    const updatedTodos = todos
      .map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
            completedTimestamp: todo.completed ? null : new Date().getTime(),
          };
        }
        return todo;
      })
      .sort((a, b) => {
        // Sort pending todos by createdTimestamp in ascending order -- entry that has been waiting for the longest time is on top
        if (!a.completed && !b.completed) {
          return a.createdTimestamp - b.createdTimestamp;
        }
        return a.completed ? 1 : -1;
      });

    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    const updatedOriginalTodos = originalTodos
      .map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
            completedTimestamp: todo.completed ? null : new Date().getTime(),
          };
        }
        return todo;
      })
      .sort((a, b) => {
        if (!a.completed && !b.completed) {
          return a.createdTimestamp - b.createdTimestamp;
        }
        return a.completed ? 1 : -1;
      });

    setOriginalTodos(updatedOriginalTodos);
    localStorage.setItem("originalTodos", JSON.stringify(updatedOriginalTodos));
  };
  const handleTodoEdit = (id, newText) => {
    const updatedTodos = todos.map((t) =>
      t.id === id ? { ...t, text: newText } : t
    );
    const updatedOriginalTodos = originalTodos.map((t) =>
      t.id === id ? { ...t, text: newText } : t
    );
    updateTodosAndLocalStorage(updatedTodos, updatedOriginalTodos);
  };

  return (
    <div className="tasks-container">
      <div className="tasks">
        {todos.map((todo, index) => (
          <div
            key={index}
            className={`task${
              todo.completed ? " completed-item" : " incomplete-item"
            }${todo.priority ? " priority" : ""}`}
          >
            <button
              className="priority-button"
              onClick={() => handlePriority(todo.id)}
            >
              {todo.priority ? <span>&#x2605;</span> : <span>&#x2606;</span>}
            </button>

            <input
              type="text"
              value={todo.text}
              className={`task-input${todo.completed ? " completed" : ""}`}
              onChange={(e) =>
                setTodos(
                  todos.map((t) =>
                    t.id === todo.id
                      ? { ...t, text: e.target.value || t.text }
                      : t
                  )
                )
              }
              onBlur={(e) =>
                e.target.value.trim() !== "" &&
                handleTodoEdit(todo.id, e.target.value.trim())
              }
              required
            />

            <button
              className="completion-button"
              onClick={() => handleCompletion(todo.id)}
            >
              {todo.completed ? <span>&#x1F60E;</span> : <span>&#x1F614;</span>}
            </button>
          </div>
        ))}
      </div>
      <div className="buttons">
        {todos.map((todo, index) => (
          <button
            className="delete-button"
            key={index}
            onClick={() => removeTodo(todo.id)}
          >
            X
          </button>
        ))}
      </div>
    </div>
  );
};

export default DisplayTasks;
