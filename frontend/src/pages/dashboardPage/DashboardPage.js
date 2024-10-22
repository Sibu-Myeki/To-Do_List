import React, { useState } from 'react';
import './DashboardPage.css';
import ToDo from '../../components/todo/Todo';
import MotivationalQuotes from '../../components/motivationalQuotes/MotivationalQuotes';
import BarChart from '../../components/barChart/BarChart'; // Import BarChart component

const DashboardPage = () => {
  const username = localStorage.getItem('username') || 'User';

  // State for the dashboard
  const [mainGoal, setMainGoal] = useState('finish coursera'); // Set a default main goal
  const [tasksAdded, setTasksAdded] = useState([]); // State to hold tasks added

  // Sample progress data for the bar chart
  const progressData = {
    labels: ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'], // Example task labels
    values: [5, 3, 8, 2, 7], // Example values corresponding to each task
  };

  // Function to update dashboard data
  const updateDashboard = (goal, routine, tasks) => {
    setMainGoal(goal);
    setTasksAdded(tasks); // Update tasks added
  };

  return (
    <div className="dashboard-container">
      <div className="left-section">
        <h2>Good Morning, {username}!</h2>
        <p><em>Success is not the key to happiness. Happiness is the key to success.</em></p>
        
        {/* BarChart placed under the quote */}
        <BarChart progressData={progressData} /> {/* Render BarChart with progressData */}
      </div>

      <div className="right-section">
        <ToDo updateDashboard={updateDashboard} />
      </div>
    </div>
  );
};

export default DashboardPage;
