import React, { useState } from "react";
import AddTask from "./components/AddTask";
import DisplayTasks from "./components/DisplayTasks";
import Footer from "./components/Footer";

// Lifting state up
const TodoList = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const addTodo = (todo) => {
    if (todo.text.trim() !== "") {
      const timestamp = new Date().toLocaleString(); 
      const newTodo = { ...todo, id: Date.now(), timestamp }; // add timestamp to new todo for a unique identifier for manipulation
      const duplicateTodo = todos.find((a) => a.text === todo.text); // check for duplicates
      if (!duplicateTodo) {
        setTodos([...todos, newTodo]);
        localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
      }
    }
    
    // checkpoint: get last three todos with their timestamps
    const lastThreeTodos = todos.slice(-3).map((todo) => ({
      text: todo.text,
      timestamp: todo.timestamp,
    })); 
    console.log("Last three added todos:", lastThreeTodos);
  };

  // add timestamp to LS if I want to use it as a unique ID??



const removeTodo = (id) => {
  const updatedTodos = todos.filter((todo) => todo.id !== id);
  const removedTodo = todos.find((todo) => todo.id === id);
  setTodos(updatedTodos);
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
  console.log(`Removed todo: ${removedTodo.text}`);
};


  return (
    <>
      <AddTask addTodo={addTodo} />
      <DisplayTasks todos={todos} removeTodo={removeTodo} />
    </>
  );
};

const App = () => {
  return (
    <>
      <header className="App-header">
        <h1>do something meaningful today</h1>
      </header>
      <main>
        <TodoList />
      </main>
      <Footer />
    </>
  );
};

export default App;
