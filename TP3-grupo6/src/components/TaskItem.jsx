import React from 'react';
import './TaskItem.css';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <button className="btn eliminar-btn" onClick={() => onDelete(task.id)}>Eliminar</button>
      <button className="btn realizada-btn" onClick={() => onToggle(task.id)}>Realizada</button>
    </div>
  );
}

export default TaskItem;
