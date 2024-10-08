import React, { useState } from 'react';
import './Todo.css'; // Import your custom styles

const ToDo = () => {
  const [tasks, setTasks] = useState([]); // State for tasks
  const [newTask, setNewTask] = useState(''); // State for new task input
  const [newPriority, setNewPriority] = useState('Medium'); // State for new task priority
  const [newDueDate, setNewDueDate] = useState(''); // State for due date
  const [sortBy, setSortBy] = useState('priority'); // State for sorting
  const [editIndex, setEditIndex] = useState(null); // State for edit index
  const [editText, setEditText] = useState(''); // State for edited text
  const [categories] = useState(['Work', 'Personal', 'Other']); // Static categories

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        text: newTask,
        status: 'pending',
        priority: newPriority,
        dueDate: newDueDate,
        category: 'Personal'
      }]);
      setNewTask(''); // Reset input field
      setNewPriority('Medium'); // Reset priority
      setNewDueDate(''); // Reset due date
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks); // Update task list
  };

  const pauseTask = (index) => {
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, status: 'paused' } : task
    );
    setTasks(updatedTasks); // Update task status to paused
  };

  const finishTask = (index) => {
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, status: 'finished' } : task
    );
    setTasks(updatedTasks); // Update task status to finished
  };

  const setTaskCategory = (index, category) => {
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? { ...task, category } : task
    );
    setTasks(updatedTasks); // Update task category
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
        
        <label htmlFor="dueDateInput">Due Date:</label>
        <input
          id="dueDateInput"
          type="date"
          onChange={(e) => setNewDueDate(e.target.value)}
          value={newDueDate}
        />
        
        <button onClick={addTask}>Add Task</button>
      </div>

      <h3>Tasks Added:</h3>
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
            <div className="button-group">
              <button onClick={() => deleteTask(index)}>Delete</button>
              <button onClick={() => pauseTask(index)}>Pause</button>
              <button onClick={() => finishTask(index)}>Finish</button>
              {editIndex !== index && (
                <button onClick={() => {
                  setEditIndex(index);
                  setEditText(task.text);
                }}>Edit</button>
              )}
            </div>
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

export default ToDo; // Export ToDo component
