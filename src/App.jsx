import React, { useState } from "react";
import AddTask from "./components/AddTask";
import DisplayTasks from "./components/DisplayTasks";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const removeTodo = (index) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos.splice(index, 1);
      return newTodos;
    });
  };

  return (
    <div>
      <h1>to-do list</h1>
      <AddTask addTodo={addTodo} />
      <DisplayTasks todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
