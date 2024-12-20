export const getTodo = async (ToDo, userId) => {
  return await ToDo.find({ user: userId });
};

export const markTodo = async (ToDo, userId, todoId) => {
  const todo = await ToDo.findById(todoId);
  
  if (!todo || todo.user.toString() !== userId.toString()) {
    throw new Error("Not authorized or todo not found");
  }
  todo.completed = true;
  todo.completedAt = new Date(); // Set the completedAt timestamp
  await todo.save();
  return todo;
};

export const updateTodo = async (ToDo, userId, todoId, newtext) => {
  const todo = await ToDo.findById(todoId);
  console.log(userId.toString());
  console.log( todo.user.toString());
  
  
  
  if (!todo || todo.user.toString() !== userId.toString()) {
    throw new Error("Not authorized or todo not found");
  }

  todo.text = newtext;
  await todo.save();
  return todo;
};

export const deleteTodo = async (ToDo, userId, todoId) => {
  
  const todo = await ToDo.findById(todoId);
  console.log(userId.toString());
  console.log(todoId);
  
  console.log(todo);
  
  // console.log( todo.user.toString());
  if (!todo || todo.user.toString() !== userId.toString()) {
    throw new Error("Not authorized or todo not found");
  }

  // Use deleteOne() to remove the document
  await ToDo.deleteOne({ _id: todoId });

  console.log("Todo deleted successfully");
};

export const addTodo = async (ToDo, userId, text) => {
  const todo = ToDo.create({ user: userId, text });
  todo.createdAt = Date.now();
  return todo;
};
