import React from 'react';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
      {task.text}
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </div>
  );
}

export default TaskItem;
