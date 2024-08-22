import React from 'react';
import './TODOItem.css'; // If you have custom styles

const TODOItem = ({ todo, onDelete }) => {
  return (
    <li className="todo-item">
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TODOItem;
