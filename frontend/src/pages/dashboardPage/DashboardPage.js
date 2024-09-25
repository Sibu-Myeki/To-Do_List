import React from 'react';
import ToDo from '../../components/todo/Todo'; // Adjust the path if needed

const DashboardPage = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <ToDo /> {/* Include the Todo component here */}
    </div>
  );
};

export default DashboardPage;
