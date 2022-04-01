const express = require("express");
const router = express.Router();

//Les middleWare permettent d'externaliser et
// de globaliser la logique du traitement d'une requête
const verifyParams = require("../middleware/verifyParams");

//importer les fonctions du contrôleur des routes pour todos/
const todoCtrl = require("../controllers/todos");

//route/todos/
router.get("/", verifyParams, todoCtrl.list);

//route /todos/:id
//le router executera la requête dans l'odre des middlewares,
//pour finir avec le contrôleur de la requête
// router.get("/:id", verifyParams, todoCtrl.getOneItem);

module.exports = router;
