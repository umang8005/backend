const express = require("express");
const { admin } = require("../controllers/adminController");
const router = express.Router();
const { Admin } = require("../models/Admin");

router.post("/", admin);

router.get("/:id", async (req, res) => {
  let result = await Admin.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No Record Found" });
  }
});

router.put("/update-password/:id", async (req, res) => {
  let result = await Admin.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  res.send(result);
});

module.exports = router;
