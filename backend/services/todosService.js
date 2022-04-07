//Contrôleur de la route GET /api/v1/todos/
const Todo = require("../models/Todo");
exports.list = () => {
  //on interroge la bdd
  return Todo.find();
};
