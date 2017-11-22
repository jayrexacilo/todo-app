const Todo = require("../models/todo");

module.exports = {
  index: async (req, res, next) => {
    try {
      const todos = await Todo.find({});
      res.status(200).json(todos);
    } catch (err) {
      next(err);
    }
  },
  newTodo: async (req, res, next) => {
    try {
      const newTodo = new Todo(req.body);
      const todo = await newTodo.save();
      res.status(201).json(todo);
    } catch (err) {
      next(err);
    }
  }
};
