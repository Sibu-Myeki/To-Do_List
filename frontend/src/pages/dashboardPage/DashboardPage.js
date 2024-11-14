import React, { useState } from 'react';
import './DashboardPage.css';
import ToDo from '../../components/todo/Todo';
import MotivationalQuotes from '../../components/motivationalQuotes/MotivationalQuotes';
import LineChart from '../../components/lineChart/LineChart'; // Correctly import LineChart

const DashboardPage = () => {
  const username = localStorage.getItem('username') || 'User';

  // State for the dashboard
  const [mainGoal, setMainGoal] = useState('finish coursera'); // Set a default main goal
  const [tasksAdded, setTasksAdded] = useState([]); // State to hold tasks added

  // Sample progress data for the line chart
  const progressData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'], // Example labels for the line chart
    values: [10, 30, 40, 20, 50], // Example completion percentage values
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
        
        {/* Render LineChart with progressData */}
        <LineChart progressData={progressData} />
      </div>

      <div className="right-section">
        <ToDo updateDashboard={updateDashboard} />
      </div>
    </div>
  );
};

export default DashboardPage;
