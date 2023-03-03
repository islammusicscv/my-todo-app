import React from "react";
import TodoItem from "./TodoItem";

interface TodoListProps {
  items: { id: number; text: string; completed: boolean }[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onToggle, onDelete }) => {
  return (
    <div>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.completed}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
