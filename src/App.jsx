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
    const createdTimestamp = new Date().getTime(); // to calc. time items have been waiting since creation --> sort
    const newTodo = { ...todo, id: Date.now(), timestamp, createdTimestamp };
    const duplicateTodo = todos.find((a) => a.text === todo.text);
    if (!duplicateTodo) {
      const pendingTasks = todos.filter((task) => !task.completed);

      // new addition := youngest pending task always goes to bottom of pending list
      setTodos([...pendingTasks, newTodo, ...todos.slice(pendingTasks.length)]);
      localStorage.setItem(
        "todos",
        JSON.stringify([
          ...pendingTasks,
          newTodo,
          ...todos.slice(pendingTasks.length),
        ])
      );
    }
  }
};



  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    const removedTodo = todos.find((todo) => todo.id === id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    console.log(`Removed todo: ${removedTodo.text}`);
  };

  return (
    <>
      <div className="container">
        <AddTask addTodo={addTodo} />
        {todos.length > 0 ? (
          <DisplayTasks
            todos={todos}
            removeTodo={removeTodo}
            setTodos={setTodos}
          />
        ) : null}
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <header className="App-header">
        <h1>get it done</h1>
      </header>
      <main>
        <TodoList />
      </main>
      <Footer />
    </>
  );
};

export default App;
