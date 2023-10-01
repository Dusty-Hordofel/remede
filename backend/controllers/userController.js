const userService = require("../services/userService");
const User = require("../database/models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

exports.createUser = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    res.status(201).json({ user });
  } catch (error) {
    console.error("Error in userService.js", error);
    throw new Error(error);
  }
};

exports.loginUser = async (req, res) => {
  const { email, password, rememberMe } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      throw new Error("User not found!");
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new Error("Password is invalid");
    }

    // creation of token
    const expiresIn = rememberMe ? 60 * 60 * 24 : 60 * 60; // 1 jour ou 1 heure

    const token = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY || "default-secret-key",
      { expiresIn: expiresIn }
    );

    console.log(
      "🚀 ~ file: userController.js:48 ~ exports.loginUser= ~ token:",
      token
    );

    // res.cookie('token', token, { httpOnly: true, sameSite: 'strict' }).status(201).json({ message: 'Logged in successfully' });
    // res.cookie('token', token, { httpOnly: true, sameSite: 'strict' }).send('Logged in successfully');
    // return {token}

    res.status(201).json({ token });
  } catch (error) {
    console.error("Error in userService.js", error);
    throw new Error(error);
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const jwtToken = req.headers.authorization.split("Bearer")[1].trim();
    const decodedJwtToken = jwt.decode(jwtToken);
    const user = await User.findOne({ _id: decodedJwtToken.id });
    const { firstName, lastName, ...rest } = user;

    if (!user) {
      throw new Error("User not found!");
    }

    res.status(201).json({ firstName, lastName });
  } catch (error) {
    console.error("Error in userService.js", error);
    throw new Error(error);
  }
};

exports.updateUserProfile = async (req, res) => {
  const { firstName, lastName } = req.body;

  try {
    const jwtToken = req.headers.authorization.split("Bearer")[1].trim();
    const decodedJwtToken = jwt.decode(jwtToken);
    const user = await User.findOneAndUpdate(
      { _id: decodedJwtToken.id },
      {
        firstName,
        lastName,
      },
      { new: true }
    );

    if (!user) {
      throw new Error("User not found!");
    }

    return res.status(201).json({ user });
  } catch (error) {
    console.error("Error in userService.js", error);
    return res.status(400).json({ message: error });
    // throw new Error(error)
  }
};
