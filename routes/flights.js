const express = require("express");
const { getAllFlight } = require("../controllers/flightController");
const router = express.Router();

const { verifyAdmin } = require("../utils/verifyToken");

router.get("/", verifyAdmin, getAllFlight);

module.exports = router;