const express = require('express');
const { json } = require("express");

const app = express();
app.use(json());

let todoList = [];

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todoList);
});

// Add a todo
app.post('/todos', (req, res) => {
    try {
        const newTodo = req.body;
        todoList.push(newTodo);
        res.send('Todo added successfully');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a todo by ID
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  todo = todoList.find((todo) => todo.id == id);
//   console.log(todo)
  if (todo) {
    todoList.splice(todoList.indexOf(todo), 1);
    res.send('Todo deleted successfully');
  } else {
    res.status(404).send('Todo not found');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
