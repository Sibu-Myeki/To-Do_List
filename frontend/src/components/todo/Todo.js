import React, { useState } from 'react';
import './ToDo.css';  // Importing your custom styles

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, status: 'pending' }]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  const pauseTask = (index) => {
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, status: 'paused' } : task
    );
    setTasks(updatedTasks);
  };

  const finishTask = (index) => {
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, status: 'finished' } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task.text} - {task.status}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => pauseTask(index)}>Pause</button>
            <button onClick={() => finishTask(index)}>Finish</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
