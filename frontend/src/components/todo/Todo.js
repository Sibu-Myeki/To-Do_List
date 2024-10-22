import React, { useState } from 'react';
import './Todo.css';

const ToDo = ({ updateDashboard }) => {
  const [goal, setGoal] = useState('finish coursera'); // Default main goal
  const [dueDate, setDueDate] = useState('2025-05-22'); // Default due date
  const [dailyTask, setDailyTask] = useState('');
  const [tasks, setTasks] = useState([]); // Array of task objects

  const addTask = () => {
    if (dailyTask.trim()) {
      const newTask = {
        description: dailyTask,
        relatedGoal: goal,
        dueDate: dueDate,
      };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      updateDashboard(goal, dueDate, updatedTasks.map(task => task.description)); // Update the dashboard with new routine
      setDailyTask(''); // Clear input
    }
  };

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>

      <div className="input-group">
        <label htmlFor="mainGoalInput">Main Goal:</label>
        <input
          id="mainGoalInput"
          type="text"
          value={goal}
          onChange={handleGoalChange}
          placeholder="Set your main goal"
        />

        <label htmlFor="dueDateInput">Due Date:</label>
        <input
          id="dueDateInput"
          type="date"
          value={dueDate}
          onChange={handleDueDateChange}
        />

        <label htmlFor="dailyTaskInput">Daily Task:</label>
        <input
          id="dailyTaskInput"
          type="text"
          value={dailyTask}
          onChange={(e) => setDailyTask(e.target.value)}
          placeholder="Add a daily task to tackle the main goal"
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <h3>Tasks Added:</h3>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>Task:</strong> {task.description} <br />
            <strong>Related Goal:</strong> {task.relatedGoal} <br />
            <strong>Due Date:</strong> {task.dueDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
