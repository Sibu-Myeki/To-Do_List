import React from 'react';
import './PredefinedGoals.css';

const PredefinedGoals = ({ category, onSelectGoal }) => {
  const predefinedGoals = {
    Health: ['Lose 1 kg per week', 'Run 5 km per day'],
    Learning: ['Complete 1 course per month', 'Read 5 pages per day'],
    Career: ['Apply to 5 jobs per week', 'Attend 1 networking event per month'],
    Hobbies: ['Learn 1 new recipe per week', 'Practice guitar for 30 minutes daily'],
  };

  return (
    <div className="predefined-goals">
      <h3>Select a Predefined Goal</h3>
      <select onChange={(e) => onSelectGoal(e.target.value)} className="goal-select">
        {predefinedGoals[category]?.map((goal, index) => (
          <option key={index} value={goal}>
            {goal}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PredefinedGoals;
