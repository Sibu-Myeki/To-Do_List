import React, { useState, useEffect } from 'react';
import GoalCategorySelector from '../../components/goalCategorySelector/GoalCategorySelector';
import GoalForm from '../../components/goalForm/GoalForm';
import PredefinedGoals from '../../components/predefinedGoals/PredefinedGoals';
import ProgressTracker from '../../components/ProgressTracker/ProgressTracker';
import './DashboardPage.css';

const DashboardPage = () => {
  const [category, setCategory] = useState('');
  const [goal, setGoal] = useState(null); // The current goal selected or created by the user
  const [progress, setProgress] = useState(0); // Progress state for tracking the goal's completion
  const [username, setUsername] = useState("User"); // Placeholder for user's name

  // This effect updates progress dynamically when a new goal is selected or modified
  useEffect(() => {
    if (goal) {
      const totalTasks = goal.tasks.length; // Assuming 'goal.tasks' is an array of tasks for the goal
      const completedTasks = goal.tasks.filter(task => task.completed).length; // Count completed tasks
      setProgress((completedTasks / totalTasks) * 100); // Calculate progress percentage
    }
  }, [goal]);

  // Handle category selection (Resets goal to null when category changes)
  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setGoal(null); // Reset goal selection when category changes
  };

  // Handle goal selection (Could be a predefined or custom goal)
  const handleGoalSelect = (selectedGoal) => {
    setGoal(selectedGoal);
    setProgress(10); // Example of hardcoded initial progress for a selected goal
  };

  return (
    <div className="dashboard-page">
      <h1 className="dashboard-title">Welcome to Your Dashboard, {username}!</h1>

      {/* Split Layout: Left Section (Motivation & Progress) & Right Section (Goal Setting) */}
      <div className="dashboard-layout">
        
        {/* Left Section: Motivation and Progress Tracker */}
        <div className="left-section">
          {/* Personalized Greeting */}
          <div className="motivation-box">
            <h2>You're Doing Great, {username}!</h2>
            <p>Stay focused and keep pushing towards your goal!</p>
            <p>Remember, progress is progress, no matter how small!</p>
          </div>

          {/* Display Goal Summary and Progress Tracker if a goal is selected */}
          {goal && (
            <div className="goal-summary">
              <h3>Your Goal: {goal.name}</h3> {/* Assuming goal has a 'name' property */}
              <p>You're making progress toward your goal! Keep going!</p>
              <ProgressTracker progress={progress} />
            </div>
          )}
        </div>

        {/* Right Section: Goal Setting */}
        <div className="right-section">
          <h2>Select or Create a Goal</h2>
          
          {/* Goal Category Selector */}
          <GoalCategorySelector onCategorySelect={handleCategorySelect} />

          {/* Show Goal Form and Predefined Goals only after a category is selected */}
          {category && (
            <>
              <PredefinedGoals category={category} onSelectGoal={handleGoalSelect} />
              <GoalForm category={category} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
