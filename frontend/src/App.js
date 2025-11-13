import React, { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "./api";
import TaskBoard from "./components/TaskBoard";
import TaskForm from "./components/TaskForm";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTasks()
      .then(res => setTasks(res.data))
      .finally(() => setLoading(false));
  }, []);

  const addTask = (task) => {
    createTask(task).then(res => setTasks([...tasks, res.data]));
  };

  const editTask = (id, updated) => {
    updateTask(id, updated).then(res => {
      setTasks(tasks.map(t => (t.id === id ? res.data : t)));
    });
  };

  const removeTask = (id) => {
    deleteTask(id).then(() => setTasks(tasks.filter(t => t.id !== id)));
  };

  if (loading) return <p>Carregando...</p>;

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
      <h2>Mini Kanban</h2>
      <TaskForm onSubmit={addTask} />
      <TaskBoard tasks={tasks} onEdit={editTask} onDelete={removeTask} />
    </div>
  );
}
