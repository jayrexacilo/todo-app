const Todo = require("../models/todo");

module.exports = {
  index: async (req, res, next) => {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  },
  newTodo: async (req, res, next) => {
    const newTodo = new Todo(req.body);
    const todo = await newTodo.save();
    res.status(201).json(todo);
  }
};
