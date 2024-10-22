import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './BarChart.css'; // Updated CSS import

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ progressData }) => {
  // Define an array of colors for the bars
  const colors = [
    'rgba(75, 192, 192, 0.6)',  // Color for task 1
    'rgba(255, 99, 132, 0.6)',  // Color for task 2
    'rgba(255, 206, 86, 0.6)',   // Color for task 3
    'rgba(54, 162, 235, 0.6)',   // Color for task 4
    'rgba(153, 102, 255, 0.6)',  // Color for task 5
    'rgba(255, 159, 64, 0.6)'    // Color for task 6
  ];

  const data = {
    labels: progressData.labels,
    datasets: [
      {
        label: 'Progress',
        data: progressData.values,
        backgroundColor: progressData.values.map((_, index) => colors[index % colors.length]), // Cycle through colors
        borderColor: progressData.values.map((_, index) => colors[index % colors.length].replace(/0.6/, '1')), // Set border color
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weekly Progress',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Tasks Completed',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Tasks',
        },
      },
    },
  };

  return (
    <div className="bar-chart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
