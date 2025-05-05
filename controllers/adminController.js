const { Admin } = require("../models/Admin");
const jwt = require("jsonwebtoken");

module.exports.admin = async (req, res) => {
  if (req.body.email && req.body.password) {
    let user = await Admin.findOne(req.body);
    if (user) {
      jwt.sign({ user }, { expiresIn: "2h" }, () => {
        res.send({ user });
      });
    } else {
      res.send({ result: "Invalid email or password!!" });
    }
  }
};
