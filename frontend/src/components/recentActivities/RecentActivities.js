import React from 'react';
import './RecentActivities.css';

const RecentActivities = () => {
  // Example data for recent activities
  const activities = [
    "Completed task 'Design landing page'",
    "Started task 'Implement API integration'",
    "Marked task 'Fix bugs' as completed",
  ];

  return (
    <div className="recent-activities-container">
      <h2>Recent Activities</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
