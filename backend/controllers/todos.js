const Todo = require("../models/Todo");
// const { genericCtrl } = require("../helper/ctrlHelper");
const todoServices = require("../services/todosService");

//contrôleur de la route GET /todos
exports.list = async (req, res) => {
  try {
    const todos = await todoServices.list();
    if (todos) res.status(200).json(todos);
  } catch (e) {
    res.send(400).send(e);
  }
};

//controleur de la rouge POST /todos
