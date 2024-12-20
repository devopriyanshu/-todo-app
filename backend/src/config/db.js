import mongoose from "mongoose";

export const connectAuthdb = () => {
  const authConn = mongoose.createConnection(process.env.AUTH_DB_URI || "mongodb://localhost:27017/auth_database");

  authConn.on("connected", () => {
    console.log("AuthDB connected successfully");
  });

  authConn.on("error", (error) => {
    console.error("AuthDB connection error:", error.message);
    process.exit(1); // Exit the process if the connection fails
  });

  return authConn;
};

export const connectToDodb = () => {
  const todoConn = mongoose.createConnection(process.env.TODO_DB_URI || "mongodb://localhost:27017/todo_database");

  todoConn.on("connected", () => {
    console.log("TodoDB connected successfully");
  });

  todoConn.on("error", (error) => {
    console.error("TodoDB connection error:", error.message);
    process.exit(1); 
  });

  return todoConn;
};
