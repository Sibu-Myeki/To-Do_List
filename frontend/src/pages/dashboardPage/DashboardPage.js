import React, { useState } from 'react';

const Dashboard = () => {
  const [goal, setGoal] = useState({
    type: '',
    targetAmount: 0,
    unit: '',
    startDate: '',
    dueDate: '',
    frequency: 'daily', // Can be 'daily', 'weekly', 'monthly'
  });

  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleGoalSubmit = () => {
    const totalPeriods = calculateTotalPeriods(goal.startDate, goal.dueDate, goal.frequency);
    const generatedTasks = generateTasks(goal.targetAmount, totalPeriods);
    setTasks(generatedTasks);
    setCompletedTasks(0);
    setProgress(0);
  };

  const calculateTotalPeriods = (startDate, dueDate, frequency) => {
    const start = new Date(startDate);
    const end = new Date(dueDate);
    const difference = end - start;
    
    switch (frequency) {
      case 'weekly':
        return Math.ceil(difference / (1000 * 3600 * 24 * 7));
      case 'monthly':
        return Math.ceil(difference / (1000 * 3600 * 24 * 30));
      default:
        // Default to daily
        return Math.ceil(difference / (1000 * 3600 * 24)) + 1;
    }
  };

  const generateTasks = (targetAmount, periods) => {
    const amountPerPeriod = Math.floor(targetAmount / periods);
    const remainder = targetAmount % periods; // Distribute any remaining amount
    const taskList = [];

    for (let period = 0; period < periods; period++) {
      const amount = amountPerPeriod + (period < remainder ? 1 : 0); // Distribute remainder across initial periods
      taskList.push({
        id: `Period-${period + 1}`,
        task: `Task for ${goal.frequency === 'daily' ? `Day ${period + 1}` : goal.frequency === 'weekly' ? `Week ${period + 1}` : `Month ${period + 1}`}`,
        amount: amount,
        unit: goal.unit,
        completed: false,
      });
    }
    return taskList;
  };

  const handleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
    const newCompletedTasks = completedTasks + 1;
    setCompletedTasks(newCompletedTasks);
    updateProgress(newCompletedTasks, tasks.length);
  };

  const updateProgress = (completed, total) => {
    const percentage = (completed / total) * 100;
    setProgress(percentage);
  };

  return (
    <div className="dashboard">
      <div className="goal-overview">
        <h2>Set Your Goal</h2>
        <div>
          <label>Goal Type:</label>
          <input
            type="text"
            placeholder="e.g., Read, Weight Loss, Job Search"
            value={goal.type}
            onChange={(e) => setGoal({ ...goal, type: e.target.value })}
          />
        </div>
        <div>
          <label>Target Amount:</label>
          <input
            type="number"
            value={goal.targetAmount}
            onChange={(e) => setGoal({ ...goal, targetAmount: parseInt(e.target.value) })}
            placeholder="e.g., 20 chapters, 25 kg, 100 applications"
          />
        </div>
        <div>
          <label>Unit:</label>
          <input
            type="text"
            placeholder="e.g., pages, kg, sessions"
            value={goal.unit}
            onChange={(e) => setGoal({ ...goal, unit: e.target.value })}
          />
        </div>
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            value={goal.startDate}
            onChange={(e) => setGoal({ ...goal, startDate: e.target.value })}
          />
        </div>
        <div>
          <label>Due Date:</label>
          <input
            type="date"
            value={goal.dueDate}
            onChange={(e) => setGoal({ ...goal, dueDate: e.target.value })}
          />
        </div>
        <div>
          <label>Frequency:</label>
          <select
            value={goal.frequency}
            onChange={(e) => setGoal({ ...goal, frequency: e.target.value })}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <button onClick={handleGoalSubmit}>Save Goal</button>
      </div>

      <div className="progress-container">
        <h3>Progress towards your goal: {goal.type}</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <span>{Math.round(progress)}% Complete</span>
      </div>

      <div className="task-list">
        <h3>Tasks</h3>
        {tasks.map((task) => (
          <div key={task.id} className="task-item">
            <p>{task.task} - {task.amount} {task.unit}</p>
            <button
              onClick={() => handleTaskCompletion(task.id)}
              disabled={task.completed}
              className={task.completed ? 'completed' : ''}
            >
              {task.completed ? 'Completed' : 'Mark as Completed'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
