import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './LineChart.css'; // CSS for styling

// Register the components with Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ progressData }) => {
  const data = {
    labels: progressData.dates, // Array of dates for the x-axis
    datasets: [
      {
        label: 'Completed Tasks',
        data: progressData.completedTasks, // Array of completed tasks for the y-axis
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.1, // Creates smooth curves
      },
      {
        label: 'Remaining Tasks',
        data: progressData.remainingTasks, // Array of remaining tasks for the y-axis
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.1, // Creates smooth curves
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Position of the legend
      },
      title: {
        display: true,
        text: 'Progress Towards Your Goal Over Time', // Title of the chart
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Tasks', // Y-axis title
        },
      },
      x: {
        title: {
          display: true,
          text: 'Date', // X-axis title
        },
      },
    },
  };

  return (
    <div className="line-chart-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
 