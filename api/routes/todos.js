const express = require("express");
// const router = express.Router();
const router = require("express-promise-router")();

const TodosController = require("../controllers/todos");

const { validateParam, schemas } = require("../helpers/routeHelpers");

router
  .route("/")
  .get(TodosController.index)
  .post(TodosController.newTodo);

router.route("/todo").get(TodosController.getTodo);
router.route("/done").get(TodosController.getDoneTodo);
router.route("/put").put(TodosController.replaceTodo);
router.route("/patch/").patch(TodosController.editTodo);
router
  .route("/delete/:todoID")
  .delete(
    validateParam(schemas.idSchema, "todoID"),
    TodosController.deleteTodo
  );

module.exports = router;
