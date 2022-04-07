const Todo = require("../models/Todo");
// const { genericCtrl } = require("../helper/ctrlHelper");
const todoServices = require("../services/todosService");

//contrôleur de la route GET /api/v1/todos/
exports.getTodos = async (req, res) => {
  try {
    const todos = await todoServices.list();
    if (todos) res.status(200).json(todos);
  } catch (e) {
    res.send(400).send(e);
  }
};

//controleur de la route POST /api/v1/todos/
exports.addTodo = (req, res) => {
  const todo = new Todo({
    description: req.body.description,
    done: false,
  });

  todo
    .save()
    .then((result) => {
      res.status(201).json(result._id);
    })
    .catch((error) => res.status(400).json({ error }));
};

//contrôleur de la route DELETE /api/v1/todos/
exports.deleteTodo = (req, res) => {
  Todo.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Deleted todo successfully" }))
    .catch((error) => res.status(400).json({ error }));
};

//contrôleur de la route PUT /api/v1/todos/
exports.updateTodo = (req, res) => {
  Todo.updateOne(
    { _id: req.params.id },
    { description: req.body.description, done: req.body.done }
  )
    .then(() => res.status(200).json({ message: "Updated todo successfully" }))
    .catch((error) => res.status(400).json({ error }));
};
