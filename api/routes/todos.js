const express = require("express");
// const router = express.Router();
const router = require("express-promise-router")();

const TodosController = require("../controllers/todos");

router
  .route("/")
  .get(TodosController.index)
  .post(TodosController.newTodo);

module.exports = router;
