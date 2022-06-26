import React from 'react'
import './delete-task.styles.css'

const DeleteTask = ({deleteTaskHandler}) => (
  <button className='deleteBtn' onClick={deleteTaskHandler}>Delete Task</button>
)

export default DeleteTask