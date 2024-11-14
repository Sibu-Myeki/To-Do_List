import React, { useState } from 'react';
import './Todo.css';

const ToDo = ({ updateDashboard }) => {
  const [goal, setGoal] = useState(''); // Main goal input
  const [goalDueDate, setGoalDueDate] = useState(''); // Goal due date
  const [dailyTask, setDailyTask] = useState(''); // Daily task input
  const [taskDueDate, setTaskDueDate] = useState(''); // Task due date
  const [tasks, setTasks] = useState([]); // Array to store tasks

  // Function to add a task
  const addTask = () => {
    if (dailyTask.trim() && taskDueDate) {
      const newTask = {
        description: dailyTask,
        dueDate: taskDueDate,
        completed: false, // Track completion
      };
      setTasks((prevTasks) => [...prevTasks, newTask]); // Add task to the list
      setDailyTask(''); // Clear the input
      setTaskDueDate(''); // Clear the due date input
      updateDashboard(goal, goalDueDate, [...tasks, newTask]); // Update the dashboard
    }
  };

  // Toggle task completion
  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed; // Toggle completion status
    setTasks(updatedTasks);
    updateDashboard(goal, goalDueDate, updatedTasks); // Update the dashboard
  };

  return (
    <div className="todo-container">
      <h2>Goal Tracker</h2>

      <div className="input-group">
        <label>Main Goal:</label>
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Enter your main goal"
        />
        
        <label>Goal Due Date:</label>
        <input
          type="date"
          value={goalDueDate}
          onChange={(e) => setGoalDueDate(e.target.value)}
        />

        <label>Daily Task:</label>
        <input
          type="text"
          value={dailyTask}
          onChange={(e) => setDailyTask(e.target.value)}
          placeholder="Add a daily task"
        />

        <label>Task Due Date:</label>
        <input
          type="date"
          value={taskDueDate}
          onChange={(e) => setTaskDueDate(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <h3>Tasks:</h3>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>{task.description}</strong> - Due: {task.dueDate} 
            <button onClick={() => toggleTaskCompletion(index)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
