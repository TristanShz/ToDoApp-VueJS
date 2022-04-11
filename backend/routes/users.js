const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");

const userCtrl = require("../controllers/users");

//route POST /register
router.post("/register", verifyToken, userCtrl.addUser);

//route POST /login
router.post("/login", userCtrl.loginUser);
module.exports = router;
