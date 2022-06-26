import "./App.css";
import React from "react";
import { useState } from "react";
import TaskLine from "./components/task-line/task-line.component";
import AddTaskInput from "./components/inputs/add-task-box/add-task-input.component";
import SearchBox from "./components/inputs/search-box/search-box.component";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Wash The Dishes", done: false },
    { id: 2, name: "Clean The House", done: false },
    { id: 3, name: "Buy a car", done: false },
  ]);

  const [newTask, setNewTaskField] = useState("");
  const [searchField, setSearchField] = useState("");

  const addTaskHandler = () => {
    setTasks(
      tasks.concat({
        id: tasks.slice(-1)[0].id + 1,
        name: newTask,
        done: false,
      })
    );
    setNewTaskField("");
  };

  const onSearchHandler = (event) => {
    setSearchField(event.target.value);
  };

  const onClickCheckbox = (index) => {
    let newTasks = [...tasks];
    newTasks[index] = { ...newTasks[index], done: !newTasks[index].done };

    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter((el) => {
    return el.name
      .toLocaleLowerCase()
      .includes(searchField.toLocaleLowerCase());
  });

  const deleteTaskHandler = (index) => {

    const newTodo = [...tasks]
    newTodo.splice(index, 1)
    setTasks(newTodo)
  }

  return (
    <div className="App">
      <h1 className="title">Todo List Functional Component</h1>

      <AddTaskInput
        setInputValue={newTask}
        changeValueHandler={(event) => setNewTaskField(event.target.value)}
        addTaskHandler={addTaskHandler}
      />

      <SearchBox onSearchHandler={onSearchHandler} searchValue={searchField} />

      <div className="task-wrapper">
        {
          filteredTasks.length == 0 
            ? <h2 className="noTasks">You have nothing to do T_T</h2> 
            : filteredTasks.map((el, index) => {
                return (
                  <TaskLine
                    changeStatus={() => onClickCheckbox(index)}
                    key={el.id}
                    name={el.name}
                    status={el.done}
                    deleteTaskHandler={() => deleteTaskHandler(index)}
                  />
                );
        })}
      </div>
    </div>
  );
}

export default App;
