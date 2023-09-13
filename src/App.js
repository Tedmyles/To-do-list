// src/App.js

import React, { useState } from 'react';
import './App.css';
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Walk the dog', completed: true },
    { id: 3, text: 'Do laundry', completed: false },
  ]);

  const [newTaskText, setNewTaskText] = useState('');

  const addTask = () => {
    if (newTaskText.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        text: newTaskText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskText('');
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            placeholder="Add a new task"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            className="form-control mb-3"
          />
          <button onClick={addTask} className="btn btn-primary">
            Add Task
          </button>
        </div>
        <div className="col-md-6">
          <p>Total Tasks: {tasks.length}</p>
          <p>Completed Tasks: {tasks.filter((task) => task.completed).length}</p>
        </div>
      </div>
      <div className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;



 