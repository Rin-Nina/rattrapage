const express = require("express");
const {
  login,
  getTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todosController");

const router = express.Router();

router.post("/login", login);
router.get("/", authMiddleware, getTodos);
router.post("/", authMiddleware, createTodo);
router.get("/:id", authMiddleware, getTodo);
router.put("/:id", authMiddleware, updateTodo);
router.delete("/:id", authMiddleware, deleteTodo);

module.exports = router;
// This code defines a router for the todos collection. The router defines routes for creating, reading, updating, and deleting todos. Each route calls a corresponding controller function that interacts with the database.
