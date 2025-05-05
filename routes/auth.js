const express = require("express");
const { login, register } = require("../controllers/authController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.put("/register", register);

module.exports = router;
