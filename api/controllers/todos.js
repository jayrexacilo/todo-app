const Todo = require("../models/todo");

module.exports = {
<<<<<<< HEAD
  index: async (req, res, next) => {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  },
  newTodo: async (req, res, next) => {
    const newTodo = new Todo(req.body);
    const todo = await newTodo.save();
    res.status(201).json(todo);
=======
  index: (req, res, next) => {
    Todo.find({})
      .then(todos => {
        res.status(200).json(todos);
      })
      .catch(err => {
        next(err);
      });
  },
  newTodo: (req, res, next) => {
    const newTodo = new Todo(req.body);
    newTodo
      .save()
      .then(todos => {
        res.status(201).json(todos);
      })
      .catch(err => {
        next(err);
      });
>>>>>>> 9b40f49... Created a todos API with POST and GET request
  }
};
