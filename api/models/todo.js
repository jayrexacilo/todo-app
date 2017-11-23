const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  todoName: String,
  done: Boolean
});

const Todo = mongoose.model("todo", todoSchema);
module.exports = Todo;
