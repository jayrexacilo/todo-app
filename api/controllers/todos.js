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
  },
  getTodo: async (req, res, next) => {
    const todo = await Todo.find({ done: false });
    res.status(200).json(todo);
  },
  getDoneTodo: async (req, res, next) => {
    const todo = await Todo.find({ done: true });
    res.status(200).json(todo);
  },
  replaceTodo: async (req, res, next) => {
    // enforce that req.body must contain all the fields
    const { todoID } = req.params;
    const newTodo = req.body;
    const result = await Todo.findByIdAndUpdate(todoID, newTodo);
    res.status(200).json({ success: true });
  },
  editTodo: async (req, res, next) => {
    // req.body may contain any number of fields
    const { todoID } = req.params;
    const newTodo = req.body;
    const result = await Todo.findByIdAndUpdate(todoID, newTodo);
    res.status(200).json({ success: true });
  },
  deleteTodo: async (req, res, next) => {
    const { todoID } = req.params;
    const removeTodo = req.body;
    const result = await Todo.findByIdAndRemove(todoID, removeTodo);
    res.status(200).json({ success: true });
  }
};
