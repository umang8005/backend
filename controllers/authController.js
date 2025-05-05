const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// user registration
module.exports.register = async (req, res) => {
  try {
    // hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: hash,
      phone: req.body.phone,
      photo: req.body.photo,
    });

    await newUser.save();

    res.status(200).json({ success: true, message: "Successfully created" });
  } catch (err) {
    console.log("err", err);
    res
      .status(500)
      .json({ success: false, message: "Failed to created. Try again" });
  }
};

// user login
module.exports.login = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });

    // if user doesn't exist
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // if user is exist then check the password or compare the password
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    // if password is incorrect
    if (!checkCorrectPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect email or passsword" });
    }

    const { password, role, ...rest } = user._doc;

    // create jwt token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      "gahg48589a45ajfjAUFAHHFIhufuu",
      { expiresIn: "15d" }
    );

    //set token in the browser cookies and send the response to the client
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        success: true,
        message: "successful",

        data: { ...rest, token },
        role,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to login" });
  }
};
