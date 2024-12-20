import express from "express";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";
import todoRoutes from "./src/routes/todoRoutes.js";
import { connectAuthdb, connectToDodb } from "./src/config/db.js";
import UserModel from "./src/models/userModel.js";
import TodoModel from "./src/models/todoModel.js";

const app = express();

// Enable CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
  })
);

const authConn = connectAuthdb();
const User = UserModel(authConn);

const todoConn = connectToDodb();
const ToDo = TodoModel(todoConn);

// Middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// Routes
app.use("/api/auth", authRoutes(User));
app.use("/api/todo", todoRoutes(ToDo));

// Start the server


export default app; // Export models if needed
