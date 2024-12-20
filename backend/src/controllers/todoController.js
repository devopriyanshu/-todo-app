import {
  getTodo,
  deleteTodo,
  addTodo,
  markTodo,
  updateTodo,
} from "../services/todoService.js";

export const getUserTodos = async (req, res, ToDo) => {
  try {
    console.log(req.user._id);
    // const userId = mongoose.Types.ObjectId(req.user._id);
    const todos = await getTodo(ToDo,req.user._id);
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createTodo = async (req, res, ToDo) => {
  const { text } = req.body;
  try {
    const todo = await addTodo(ToDo,req.user._id, text);
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateTodoText = async (req, res, ToDo) => {
  const { text } = req.body;
  try {
    const todo = await updateTodo(ToDo,req.user._id, req.query.id, text);
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const completeTodo = async (req, res, ToDo) => {
  try {
    const todo = await markTodo(ToDo,req.user._id, req.query.id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const removeTodo = async (req, res, ToDo) => {
  try {
    await deleteTodo(ToDo,req.user._id, req.query.id);
    res.status(200).json({ message: "Todo removed" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
