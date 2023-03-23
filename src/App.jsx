import React, { useState } from "react";
import AddTask from "./components/AddTask";
import DisplayTasks from "./components/DisplayTasks";

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    localStorage.setItem("todos", JSON.stringify([...todos, todo]));
  };

const removeTodo = (index) => {
  const updatedTodos = [...todos];
  updatedTodos.splice(index, 1);
  setTodos(updatedTodos);
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
};

  return (
    <div>
      <h1>to-do list</h1>
      <AddTask addTodo={addTodo} />
      <DisplayTasks todos={todos} removeTodo={removeTodo} />
    </div>
  );
};


export default App;
