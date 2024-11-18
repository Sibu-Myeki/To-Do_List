import React from 'react';
import './GoalCategorySelector.css';

const GoalCategorySelector = ({ onCategorySelect }) => {
  const categories = ['Health', 'Learning', 'Career', 'Hobbies'];

  return (
    <div className="goal-category-selector">
      <h3>Select Your Goal Category</h3>
      <select onChange={(e) => onCategorySelect(e.target.value)} className="category-select">
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GoalCategorySelector;
