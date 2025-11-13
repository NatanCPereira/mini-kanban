import React from "react";

export default function TaskCard({ task, onEdit, onDelete }) {
  const statuses = ["todo", "doing", "done"];

  const handleMove = (direction) => {
    const idx = statuses.indexOf(task.status);
    const newStatus = statuses[idx + direction];
    if (newStatus) onEdit(task.id, { ...task, status: newStatus });
  };

  return (
    <div style={{ border: "1px solid #999", padding: 8, borderRadius: 4, marginBottom: 8 }}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <div style={{ display: "flex", gap: 5 }}>
        <button onClick={() => handleMove(-1)}>←</button>
        <button onClick={() => handleMove(1)}>→</button>
        <button onClick={() => onDelete(task.id)}>Excluir</button>
      </div>
    </div>
  );
}
