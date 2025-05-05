const express = require("express");
const { getAllContact } = require("../controllers/contactController");
const router = express.Router();

const { verifyAdmin } = require("../utils/verifyToken");

router.post("/", verifyAdmin, getAllContact);

module.exports = router;
