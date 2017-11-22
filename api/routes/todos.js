const express = require("express");
<<<<<<< HEAD
// const router = express.Router();
const router = require("express-promise-router")();
=======
const router = express.Router();
>>>>>>> 9b40f49... Created a todos API with POST and GET request

const TodosController = require("../controllers/todos");

router
  .route("/")
  .get(TodosController.index)
  .post(TodosController.newTodo);

module.exports = router;
