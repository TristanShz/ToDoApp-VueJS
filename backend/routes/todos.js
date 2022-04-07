const express = require("express");
const router = express.Router();

//Les middleWare permettent d'externaliser et
// de globaliser la logique du traitement d'une requête
const verifyParams = require("../middleware/verifyParams");

//importer les fonctions du contrôleur des routes pour todos/
const todoCtrl = require("../controllers/todos");

//route GET /api/v1/todos/
router.get("/", todoCtrl.list);

//route /todos/:id
//le router executera la requête dans l'odre des middlewares,
//pour finir avec le contrôleur de la requête
// router.get("/:id", verifyParams, todoCtrl.getOneItem);

//route POST /api/v1/todos/
router.post("/", todoCtrl.add);

//route DELETE /api/v1/todos/
router.delete("/:id", todoCtrl.delete);

//route UPDATE /api/v1/todos/
router.put("/:id", todoCtrl.update);

module.exports = router;
