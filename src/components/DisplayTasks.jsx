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


const handleCompletion = (id) => {
  const completedTask = todos.find((todo) => todo.id === id);
  const updatedTodos = todos
    .filter((todo) => todo.id !== id)

    
// completed tasks don't need to be sorted based on timestamp so I just add them to the bottom
    .concat({ 
      ...completedTask,
      completed: !completedTask.completed,
      timestamp: Date.now(),
    })


// I want to sort pending tasks so that oldest entry is on top when I toggle it back to pneding
    .sort((a, b) => { 
      if (a.completed === b.completed) {
        if (!a.completed) {
          if (a.priority !== b.priority) {
            return b.priority - a.priority;
          } else {
            return a.timestamp - b.timestamp;
          }
        } else {
          return 0;
        }
      } else if (a.completed) {
        return 1;
      } else {
        return -1;
      }
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
                    t.id === todo.id ? { ...t, text: e.target.value } : t
                  )
                )
              }
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
