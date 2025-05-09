import React, { useState } from 'react';
import './TaskInput.css';

function TaskInput({ onAdd }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Agregar tarea..." 
      />
      <button type="submit">Agregar</button>
    </form>
  );

}

export default TaskInput;
