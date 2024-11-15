// src/todo/TaskAnalytics.js
import React from 'react';

const TaskAnalytics = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'finished').length;
  const pendingTasks = tasks.filter(task => task.status === 'pending').length;

  return (
    <div className="task-analytics">
      <h3>Task Analytics</h3>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Pending Tasks: {pendingTasks}</p>
    </div>
  );
};

export default TaskAnalytics;
