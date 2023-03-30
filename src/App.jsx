import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import DisplayTasks from "./components/DisplayTasks";
import Footer from "./components/Footer";
import DateDisplay from "./components/DateDisplay";
import SearchPrioSorting from "./components/SearchPrioSorting";
import CompletedTasksCounter from "./components/CompletedTasksCounter";

const TodoList = () => {
  const [originalTodos, setOriginalTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [filteredTodos, setFilteredTodos] = useState(originalTodos);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByPriority, setSortByPriority] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(originalTodos));
    if (searchTerm === "") {
      setFilteredTodos(originalTodos);
    }
  }, [originalTodos, searchTerm]);

  const addTodo = (todo) => {
    if (todo.text.trim() !== "") {
      const timestamp = new Date().toLocaleString();
      const createdTimestamp = new Date().getTime();
      const newTodo = { ...todo, id: Date.now(), timestamp, createdTimestamp };

      const duplicateTodo = originalTodos.find((a) => a.text === todo.text);
      if (!duplicateTodo) {
        const pendingTasks = originalTodos.filter((task) => !task.completed);
        let insertionIndex = pendingTasks.length;
        for (let i = 0; i < pendingTasks.length; i++) {
          if (createdTimestamp < pendingTasks[i].createdTimestamp) {
            insertionIndex = i;
            break;
          }
        }
        const updatedTodos = [
          ...originalTodos.slice(0, insertionIndex),
          newTodo,
          ...originalTodos.slice(insertionIndex),
        ];
        setOriginalTodos(updatedTodos);
        setFilteredTodos(
          updatedTodos.filter((todo) =>
            todo.text.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
        setHasError(false);
      } else {
        setHasError(true);
      }
    } else {
      setHasError(true);
    }
  };

  const removeTodo = (id) => {
    const updatedTodos = originalTodos.filter((todo) => todo.id !== id);
    setOriginalTodos(updatedTodos);
    setFilteredTodos(filteredTodos.filter((todo) => todo.id !== id));
  };

  const handleSort = () => {
    const sortedTodos = [...filteredTodos];
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
    setFilteredTodos(sortedTodos);
    setSortByPriority(!sortByPriority);
  };

  return (
    <>
      <div className="container">
        <DateDisplay />
        <AddTask
          addTodo={addTodo}
          todos={originalTodos}
          hasError={hasError}
          setHasError={setHasError}
        />

        <SearchPrioSorting
          handleSort={handleSort}
          sortByPriority={sortByPriority}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          originalTodos={originalTodos}
          setFilteredTodos={setFilteredTodos}
        />

        {filteredTodos.length > 0 && (
          <>
            <CompletedTasksCounter todos={filteredTodos} />
            <div className="results-container">
              <DisplayTasks
                todos={filteredTodos}
                removeTodo={removeTodo}
                setTodos={setFilteredTodos}
                originalTodos={originalTodos}
                setOriginalTodos={setOriginalTodos}
              />
            </div>
          </>
        )}
        {filteredTodos.length === 0 && (
          <>
            <CompletedTasksCounter todos={filteredTodos} />
            <p className="no-tasks">No tasks to display</p>
          </>
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
