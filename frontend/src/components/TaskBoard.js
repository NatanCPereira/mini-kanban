import React from "react";
import TaskCard from "./TaskCard";

const columns = [
  { key: "todo", label: "A Fazer" },
  { key: "doing", label: "Em Progresso" },
  { key: "done", label: "Concluídas" },
];

export default function TaskBoard({ tasks, onEdit, onDelete }) {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      {columns.map(col => (
        <div key={col.key} style={{ flex: 1, border: "1px solid #ccc", borderRadius: 5, padding: 10 }}>
          <h3>{col.label}</h3>
          {tasks
            .filter(t => t.status === col.key)
            .map(task => (
              <TaskCard key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </div>
      ))}
    </div>
  );
}
