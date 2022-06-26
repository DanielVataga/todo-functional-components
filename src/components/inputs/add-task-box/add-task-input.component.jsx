import React from "react";
import AddTaskButton from "../../buttons/add-task/add-task-button.component";
import "./add-task-input.styles.css";

const AddTaskInput = ({ changeValueHandler, setInputValue, addTaskHandler }) => (
  <div className="input-container">
    <input
      type="text"
      onChange={changeValueHandler}
      value={setInputValue}
      className="add-task-input"
      placeholder="Add task"
    />
    <AddTaskButton addTaskHandler={addTaskHandler} />
  </div>
);

export default AddTaskInput;