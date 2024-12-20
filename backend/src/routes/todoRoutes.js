import express from "express";
import { protect } from "../middlewares/todoMiddleware.js";

import {
  getUserTodos,
  createTodo,
  updateTodoText,
  completeTodo,
  removeTodo,
} from "../controllers/todoController.js";

const todoRoutes = (ToDo) => {
  const router = express.Router();

  // Add protect middleware to all routes
  router.use(protect);

  // Define routes with corresponding handlers
  router.get("/", (req, res) => getUserTodos(req, res, ToDo));
  router.post("/", (req, res) => createTodo(req, res, ToDo));
  router.put("/", (req, res) => updateTodoText(req, res, ToDo));
  router.patch("/complete", (req, res) => completeTodo(req, res, ToDo));
  router.delete("/", (req, res) => removeTodo(req, res, ToDo));

  return router;
};

export default todoRoutes;
