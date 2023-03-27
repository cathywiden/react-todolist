import React from "react";

const CompletedTasksCounter = ({ todos }) => {
  const completedTasksCount = todos.filter((todo) => todo.completed).length;

  if (completedTasksCount === 0) {
    return null;
  }

  return (
    <div className="completed-tasks-counter">
      <p>
        Completed tasks: <span>{completedTasksCount}</span>
      </p>
    </div>
  );
};

export default CompletedTasksCounter;
