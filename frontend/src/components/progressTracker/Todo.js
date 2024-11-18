import React, { useState, useEffect } from 'react';

const ToDo = ({ updateDashboard, goal, goalDueDate, setTotalTasks }) => {
  const [taskType, setTaskType] = useState('');
  const [taskDetails, setTaskDetails] = useState('');
  const [taskDueDate, setTaskDueDate] = useState('');
  const [taskWeightLost, setTaskWeightLost] = useState(0); // Weight lost for this task

  const predefinedTasks = [
    { label: 'Run 2km', type: 'run', weightLost: 0.016 },
    { label: 'Eat Clean', type: 'eatClean', weightLost: 0.000 },
    { label: 'Complete Module 1', type: 'module', weightLost: 0 }, // Module-based tasks (no weight lost)
    { label: 'Complete Module 2', type: 'module', weightLost: 0 }, // Module-based tasks (no weight lost)
  ];

  // Automatically populate total tasks for module-based goals
  useEffect(() => {
    if (!goal.toLowerCase().includes('lose')) {
      const total = predefinedTasks.filter(task => task.type === 'module').length;
      setTotalTasks(total);
    }
  }, [goal, setTotalTasks]);

  // Handle adding a task
  const handleAddTask = () => {
    if (taskType === '' || taskDetails === '' || taskDueDate === '') {
      alert('Please fill in all fields');
      return;
    }

    // Calculate weight lost for the task based on type
    let weightLost = 0;
    if (taskType === 'run') {
      const caloriesBurned = 300; // Example value for 5km run
      weightLost = caloriesBurned / 7700; // Convert calories burned to weight lost (1 kg = 7700 calories)
    } else if (taskType === 'eatClean') {
      const caloriesBurned = 500; // Example value for eating clean
      weightLost = caloriesBurned / 7700; // Convert calories burned to weight lost (1 kg = 7700 calories)
    }

    // Create a task object
    const task = {
      type: taskType,
      details: taskDetails,
      dueDate: taskDueDate,
      weightLost: weightLost,
    };

    // Pass the task to the parent component to update the dashboard
    updateDashboard(task);

    // Clear input fields
    setTaskType('');
    setTaskDetails('');
    setTaskDueDate('');
    setTaskWeightLost(0);
  };

  return (
    <div className="todo-container">
      <h3>Add a Daily Task</h3>
      <div>
        <label>Task Type: </label>
        <select value={taskType} onChange={(e) => setTaskType(e.target.value)}>
          <option value="">Select Task Type</option>
          {predefinedTasks.map((task, index) => (
            <option key={index} value={task.type}>
              {task.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Task Details: </label>
        <input
          type="text"
          value={taskDetails}
          onChange={(e) => setTaskDetails(e.target.value)}
        />
      </div>
      <div>
        <label>Task Due Date: </label>
        <input
          type="date"
          value={taskDueDate}
          onChange={(e) => setTaskDueDate(e.target.value)}
        />
      </div>
      <button onClick={handleAddTask}>Add Task</button>

      <div className="task-list">
        <h4>Tasks:</h4>
        <ul>
          {taskType &&
            <li>{taskType} - Due: {taskDueDate} - Weight Lost: {taskWeightLost} kg</li>
          }
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
