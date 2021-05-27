const express = require('express')
const { v4: uuidv4 } = require('uuid')
const cors = require('cors')

const app = express()
const PORT = 3000


const DB = {
  todos: []
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/api/v1/todos', (req, res) => {
  return res.json(DB.todos)
})

app.post('/api/v1/todos', (req, res) => {
  const newTodo = {
    id: uuidv4(),
    text: req.body.text,
    completed: false
  }
  DB.todos.push(newTodo)
  return res.json(newTodo)
})

app.patch('/api/v1/todos', (req, res) => {
  const currentTodo = DB.todos.find(todo => todo.id === req.body.id)
  currentTodo.completed = !currentTodo.completed
  return res.json(currentTodo)
})

// app.delete()

app.listen(PORT, () => {
  console.log('Server has been started on port ', PORT)
})