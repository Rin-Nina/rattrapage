const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user || user.password !== password) {
    return res.status(404).json({ message: "User not found" });
  }
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
};

module.exports = {
  login,
  getTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
};
// This code defines a login function that checks if a user exists in the database and returns a JWT token if the user is found. The token is signed using the JWT_SECRET environment variable and has an expiration time of 1 hour. The login function is then exported along with other controller functions for handling CRUD operations on todos.
