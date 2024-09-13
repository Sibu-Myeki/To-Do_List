// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Initialize Express
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Connect to MongoDB
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB...', err));

// Define a Mongoose schema and model for a to-do item
const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const Todo = mongoose.model('Todo', todoSchema);

// Define routes
app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post('/todos', async (req, res) => {
  const newTodo = new Todo({
    text: req.body.text,
  });
  await newTodo.save();
  res.json(newTodo);
});

app.delete('/todos/:id', async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.id);
  res.json(result);
});

// Start the server
const port = process.env.PORT || 3001; // Change port to 3001 or another available port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

