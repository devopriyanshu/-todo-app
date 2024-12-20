import React from "react";
import { useTodos } from "../hooks/useTodo";

const TodoList = () => {
  const {
    todos,
    isLoading,
    isError,
    markTodo,
    updateTodoText,
    deleteTodoById,
  } = useTodos();

  if (isLoading) return <p className="text-gray-500 text-center">Loading...</p>;
  if (isError) return <p className="text-red-500 text-center">Error loading todos.</p>;

  return (
    <div className="space-y-4">
      {todos?.data?.map((todo) => (
       
        <TodoItem
        
          key={todo._id}
          todo={todo}
          updateTodo={updateTodoText}
          deleteTodo={deleteTodoById}
          markTodo={markTodo}
        />
        
      ))}
    </div>
  );
};

const TodoItem = ({ todo, updateTodo, deleteTodo, markTodo }) => {
  const [isTodoEditable, setIsTodoEditable] = React.useState(false);
  const [todoMsg, setTodoMsg] = React.useState(todo.text);

  const editTodo = () => {
    if (!todoMsg.trim()) return;
    updateTodo(todo._id, { text: todoMsg }); // Ensure todo._id is passed to mutation
    setIsTodoEditable(false);
  };

  const markTodoC = () => {
    markTodo(todo._id); // Ensure todo._id is passed to mutation
  };

  const deleteTodoC = () => {
    console.log(todo);
    console.log(todo._id);
    
    deleteTodo(todo._id); // Ensure todo._id is passed to mutation
  };

  return (
    <div
      className={`flex items-center border border-black/10 rounded-lg px-3 py-2 gap-x-3 shadow-sm duration-300 ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      {/* Checkbox for marking todo as completed */}
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={markTodoC} // Pass todo._id to markTodo
      />
      {/* Text Input for Editing Todo */}
      <input
        type="text"
        className={`flex-grow border outline-none bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through text-gray-500" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Save or Edit Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg justify-center items-center bg-gray-50 border border-black/10 hover:bg-gray-100 shrink-0"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg justify-center items-center bg-gray-50 border border-black/10 hover:bg-gray-100 shrink-0"
        onClick={deleteTodoC} // Pass todo._id explicitly to delete
      >
        🚫
      </button>
    </div>
  );
};

export default TodoList;
