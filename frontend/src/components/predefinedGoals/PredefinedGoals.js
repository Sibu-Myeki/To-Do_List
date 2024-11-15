import React from 'react';
import './UserStatistics.css';

const UserStatistics = ({ stats }) => {
  return (
    <div className="user-statistics-container">
      <h2>User Statistics</h2>
      <ul>
        {stats.map((stat, index) => (
          <li key={index}>
            {stat.label}: {stat.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserStatistics;

