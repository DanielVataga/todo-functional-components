import React from 'react'
import DeleteTask from '../buttons/delete-task/delete-task.component';
import "./task-line.styles.css";


const TaskLine = ({changeStatus, name, status, deleteTaskHandler}) =>  {
  return (
    <div className="task">
        <input className="checkbox" type="checkbox" onChange={changeStatus} />

        <p className="name">{name}</p>

        <strong className="status">{status ? "Done" : "Not done"}</strong>

        <DeleteTask deleteTaskHandler={deleteTaskHandler}/>
      </div>
  )
}

export default TaskLine
