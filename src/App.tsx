import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { Typography } from "@material-ui/core";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const initialTodos: Todo[] = [
  { id: 1, text: "Learn TypeScript", completed: false },
  { id: 2, text: "Build a TODO app", completed: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text: text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const handleToggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <Typography variant="h4" align="center">
        TODO App
      </Typography>
      <AddTodoForm onAdd={handleAddTodo} />
      <TodoList
        items={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
};

export default App;
