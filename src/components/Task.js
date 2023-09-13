// src/Task.js

import React from 'react';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <h3>{task.text}</h3>
      <button onClick={() => onDelete(task.id)} className="btn btn-danger btn-sm">
        Delete
      </button>
      <button onClick={() => onToggle(task.id)} className="btn btn-success btn-sm">
        {task.completed ? 'Uncomplete' : 'Complete'}
      </button>
    </div>
  );
};

export default Task;
