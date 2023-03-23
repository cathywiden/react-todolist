const DisplayTasks = ({ todos, removeTodo }) => {
  if (todos.length === 0) {
    return null;
  }

  return (
    <div className="tasks-container">
      <div className="tasks">
        {todos.map((todo, index) => (
          <div key={index} className="task">
            {todo.text}
          </div>
        ))}
      </div>
      <div className="buttons">
        {todos.map((todo, index) => (
          <button key={index} onClick={() => removeTodo(todo.id)}>
            delete
          </button>
        ))}
      </div>
    </div>
  );
};

export default DisplayTasks;
