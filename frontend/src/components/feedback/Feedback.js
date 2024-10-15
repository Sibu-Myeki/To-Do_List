import React from 'react';
import './Feedback.css';

const Feedback = () => {
  return (
    <div className="feedback-container">
      <h2>Feedback</h2>
      <form>
        <textarea placeholder="Leave your feedback here..." rows="4" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;

