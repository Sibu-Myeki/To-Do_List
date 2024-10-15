import React from 'react'; // Import React
import './DashboardPage.css'; // Ensure the correct CSS file is imported
import ToDo from '../../components/todo/Todo'; // Import the ToDo component
import MotivationalQuotes from '../../components/motivationalQuotes/MotivationalQuotes'; // Import Motivational Quotes

const DashboardPage = () => {
  // Get the username from local storage
  const username = localStorage.getItem('username') || 'User';

  return (
    <div className="dashboard-container">
      <div className="left-section">
        <h2>{username}</h2>
        <MotivationalQuotes /> {/* Include the Motivational Quotes component */}
      </div>
      <div className="right-section">
        <ToDo /> {/* Include the ToDo component here */}
      </div>
    </div>
  );
};

export default DashboardPage;
