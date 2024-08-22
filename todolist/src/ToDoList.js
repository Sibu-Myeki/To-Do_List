import React from 'react';
import TODOItem from './TODOItem'; // Create this component separately
import './TODOList.css'; // If you have custom styles

const TODOList = ({ todos, onDelete }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TODOItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TODOList;
