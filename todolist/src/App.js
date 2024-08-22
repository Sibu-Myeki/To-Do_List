import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import LoginForm from './components/LoginForm';
import './App.css'; // Create this CSS file for app-wide styling

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle adding new todo
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Function to handle login status
  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <div className="App">
      <Header />
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <>
          <AddTodo onAdd={addTodo} />
          <TodoList todos={todos} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
