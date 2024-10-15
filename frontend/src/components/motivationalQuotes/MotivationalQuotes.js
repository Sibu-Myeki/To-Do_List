import React from 'react';
import './MotivationalQuotes.css';

const quotes = [
  "Believe you can and you're halfway there.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Don't watch the clock; do what it does. Keep going.",
  "The future depends on what you do today.",
];

const MotivationalQuotes = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  return (
    <div className="motivational-quotes-container">
      <h2>Motivational Quote</h2>
      <blockquote>{randomQuote}</blockquote>
    </div>
  );
};

export default MotivationalQuotes;
