import React from "react";

const DisplayTasks = ({ todos, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo.text}
          <button onClick={() => removeTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};


export default DisplayTasks;
