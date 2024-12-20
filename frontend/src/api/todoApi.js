import apiClient from "./apiClient";

export const fetchTodos = () => apiClient.get(`/todo`);
export const addTodo = (text) => apiClient.post("/todo", { text });
export const updateTodo = (id, text) => apiClient.put(`/todo/?id=${id}`, { text });
export const markTodoComplete = (id) => apiClient.patch(`/todo/?id=${id}/complete`);
export const deleteTodo = (id) => apiClient.delete("/todo");
