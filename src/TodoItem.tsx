import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  onToggle,
  onDelete,
}) => {
  const handleToggle = () => {
    onToggle(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div>
      <Checkbox checked={completed} onChange={handleToggle} />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {text}
      </span>
      <IconButton aria-label="delete" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default TodoItem;
