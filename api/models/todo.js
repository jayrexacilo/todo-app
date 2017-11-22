const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  id: String,
  todoItem: String
});

const Todo = mongoose.model("todo", todoSchema);
module.exports = Todo;
