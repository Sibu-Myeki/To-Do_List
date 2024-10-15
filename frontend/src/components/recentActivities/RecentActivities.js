import React from 'react';
import './RecentActivities.css';

const RecentActivities = ({ activities }) => {
  return (
    <div className="recent-activities-container">
      <h2>Recent Activities</h2>
      <ul className="recent-activities-list">
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <li key={index} className="activity-item">
              {activity}
            </li>
          ))
        ) : (
          <li>No recent activities</li>
        )}
      </ul>
    </div>
  );
};

export default RecentActivities;
