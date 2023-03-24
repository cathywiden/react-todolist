import React, { useState } from "react";
import AddTask from "./components/AddTask";
import DisplayTasks from "./components/DisplayTasks";
import Footer from "./components/Footer";

const TodoList = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByPriority, setSortByPriority] = useState(false);

  const addTodo = (todo) => {
    if (todo.text.trim() !== "") {
      const timestamp = new Date().toLocaleString();
      const createdTimestamp = new Date().getTime();
      const newTodo = { ...todo, id: Date.now(), timestamp, createdTimestamp };

      const duplicateTodo = todos.find((a) => a.text === todo.text);
      if (!duplicateTodo) {
        const pendingTasks = todos.filter((task) => !task.completed);
        let insertionIndex = pendingTasks.length;
        for (let i = 0; i < pendingTasks.length; i++) {
          if (createdTimestamp < pendingTasks[i].createdTimestamp) {
            insertionIndex = i;
            break;
          }
        }
        const updatedTodos = [
          ...todos.slice(0, insertionIndex),
          newTodo,
          ...todos.slice(insertionIndex),
        ];
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
      }
    }
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    //const removedTodo = todos.find((todo) => todo.id === id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    //console.log(`Removed todo: ${removedTodo.text}`);
  };

  const handleSort = () => {
    const sortedTodos = [...todos];
    if (sortByPriority) {
      sortedTodos.sort((a, b) => {
        if (a.priority === b.priority) {
          return a.createdTimestamp - b.createdTimestamp;
        }
        return a.priority ? -1 : 1;
      });
    } else {
      sortedTodos.sort((a, b) => {
        if (!a.completed && !b.completed) {
          return a.createdTimestamp - b.createdTimestamp;
        }
        return a.completed ? 1 : -1;
      });
    }
    setTodos(sortedTodos);
    setSortByPriority(!sortByPriority);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <AddTask addTodo={addTodo} />
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="sort-button" onClick={handleSort}>
            {sortByPriority ? <span>&#x2605;</span> : "default"}
          </button>
        </div>
        {filteredTodos.length > 0 ? (
          <DisplayTasks
            todos={filteredTodos}
            removeTodo={removeTodo}
            setTodos={setTodos}
          />
        ) : (
          <p>no results found</p>
        )}
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <header className="App-header">
        <h1>get things done</h1>
      </header>
      <main>
        <TodoList />
      </main>
      <Footer />
    </>
  );
};

export default App;
