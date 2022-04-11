const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");

const userCtrl = require("../controllers/users");

//route POST /register
router.post("/", verifyToken, userCtrl.addUser);

module.exports = router;
