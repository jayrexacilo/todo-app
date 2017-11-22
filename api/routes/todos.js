const express = require("express");
const router = express.Router();

const TodosController = require("../controllers/todos");

router
  .route("/")
  .get(TodosController.index)
  .post(TodosController.newTodo);

module.exports = router;
