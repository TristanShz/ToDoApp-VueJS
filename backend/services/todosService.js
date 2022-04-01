//Contrôleur de la route GET /todos
const Todo = require("../models/Todo");
exports.list = () => {
  //on interroge la bdd
  return Todo.find();
};
