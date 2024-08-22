import React from 'react';
import './TodoItem.css'; // Create this CSS file for styling

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="todo-item">
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={onToggle}
      >
        {todo.text}
      </span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
