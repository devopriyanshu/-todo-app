import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo, deleteTodo, fetchTodos, markTodoComplete, updateTodo } from "../api/todoApi";

export const useTodos = () => {
  const queryClient = useQueryClient();

  // Fetch todos
  const { data: todos, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchTodos(),
  });

  // Add a new todo
  const { mutate: createTodo } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  // Update an existing todo
  const { mutate: updateTodoText } = useMutation({
    mutationFn: ({ id, text }) => updateTodo(id, { text }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  // Mark a todo as complete
  const { mutate: markTodo } = useMutation({
    mutationFn: (id) => markTodoComplete(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  // Delete a todo
  const { mutate: deleteTodoById } = useMutation({
    mutationFn: (id) => deleteTodo(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  return {
    todos,
    isLoading,
    isError,
    createTodo,
    updateTodoText,
    markTodo,
    deleteTodoById,
  };
};
