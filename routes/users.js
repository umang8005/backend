const express = require("express");
const {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUser,
} = require("../controllers/useController");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

// update user
router.put("/:id", verifyUser, updateUser);

// delete user
router.delete("/:id", verifyUser, deleteUser);

// getSingle user
router.get("/:id", verifyUser, getSingleUser);

// getAll user
router.get("/", verifyAdmin, getAllUser);

module.exports = router;
