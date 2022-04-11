const express = require("express");
const router = express.Router();

//Les middleWare permettent d'externaliser et
// de globaliser la logique du traitement d'une requête
const verifyJwtToken = require("../middleware/verifyJwtToken");

//importer les fonctions du contrôleur des routes pour todos/
const todoCtrl = require("../controllers/todos");

//route GET /api/v1/todos/
router.get("/", verifyJwtToken, todoCtrl.getTodos);

//route POST /api/v1/todos/
router.post("/", verifyJwtToken, todoCtrl.addTodo);

//route DELETE /api/v1/todos/
router.delete("/:id", verifyJwtToken, todoCtrl.deleteTodo);

//route UPDATE /api/v1/todos/
router.put("/:id", verifyJwtToken, todoCtrl.updateTodo);

module.exports = router;
