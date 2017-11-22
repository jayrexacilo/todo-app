const Todo = require("../models/todo");

module.exports = {
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
  }
};
