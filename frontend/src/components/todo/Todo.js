import React, { useState } from 'react';
import './ToDo.css';  // Import your custom styles

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newPriority, setNewPriority] = useState('Medium');
  const [newDueDate, setNewDueDate] = useState('');
  const [sortBy, setSortBy] = useState('priority');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');
  const [categories] = useState(['Work', 'Personal', 'Other']);  // Static categories for simplicity

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        text: newTask,
        status: 'pending',
        priority: newPriority,
        dueDate: newDueDate,
        category: 'Personal'
      }]);
      setNewTask('');
      setNewPriority('Medium');
      setNewDueDate('');
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

  const setTaskPriority = (index, priority) => {
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, priority } : task
    );
    setTasks(updatedTasks);
  };

  const setTaskDueDate = (index, dueDate) => {
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, dueDate } : task
    );
    setTasks(updatedTasks);
  };

  const setTaskCategory = (index, category) => {
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, category } : task
    );
    setTasks(updatedTasks);
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortBy === 'priority') {
      return a.priority.localeCompare(b.priority);
    } else if (sortBy === 'dueDate') {
      return new Date(a.dueDate) - new Date(b.dueDate);
    } else {
      return a.status.localeCompare(b.status);
    }
  });

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <div className="input-group">
        <label htmlFor="taskInput">Task:</label>
        <input
          id="taskInput"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        
        <label htmlFor="prioritySelect">Priority:</label>
        <select id="prioritySelect" onChange={(e) => setNewPriority(e.target.value)} value={newPriority}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        
        <label htmlFor="dueDateInput">Due Date:</label>
        <input
          id="dueDateInput"
          type="date"
          onChange={(e) => setNewDueDate(e.target.value)}
          value={newDueDate}
        />
        
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="sort-group">
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="priority">Priority</option>
          <option value="dueDate">Due Date</option>
          <option value="status">Status</option>
        </select>
      </div>

      <ul className="task-list">
        {sortedTasks.map((task, index) => (
          <li key={index} className={`task ${task.status}`}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => {
                  const updatedTasks = tasks.map((task, taskIndex) =>
                    taskIndex === index ? { ...task, text: editText } : task
                  );
                  setTasks(updatedTasks);
                  setEditIndex(null);
                }}>Save</button>
              </>
            ) : (
              <span>{task.text} - {task.priority} - {task.dueDate} - {task.status}</span>
            )}
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => pauseTask(index)}>Pause</button>
            <button onClick={() => finishTask(index)}>Finish</button>
            {editIndex !== index && (
              <button onClick={() => {
                setEditIndex(index);
                setEditText(task.text);
              }}>Edit</button>
            )}
            <select onChange={(e) => setTaskCategory(index, e.target.value)} value={task.category}>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
