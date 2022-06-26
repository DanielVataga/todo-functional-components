import React from "react";
import "./add-task-button.styles.css";

const AddTaskButton = ({ addTaskHandler }) => (
  <button className="add-task-button" onClick={addTaskHandler}>
    Add Task
  </button>
);

export default AddTaskButton;
