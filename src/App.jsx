import React, { useState } from "react";
import AddTask from "./components/AddTask";
import DisplayTasks from "./components/DisplayTasks";
import Footer from "./components/Footer";

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
    <>
      <header className="App-header">
        <h1>do something meaningful today</h1>
      </header>
      <main>
        <AddTask addTodo={addTodo} />
        <DisplayTasks todos={todos} removeTodo={removeTodo} />
      </main>
      <Footer />
    </>
  );
};

export default App;
