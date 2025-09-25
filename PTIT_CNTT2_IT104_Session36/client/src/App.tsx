import FilterControls from "./components/FilterControls";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

interface Task {
  id: string;
  taskName: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
}

const API_URL = "http://localhost:8080/tasks";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState({
    status: "all",
    priority: "all",
    search: "",
  });

  const [openModal, setOpenModal] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const handleAdd = async (
    taskName: string,
    priority: "low" | "medium" | "high"
  ) => {
    const newTask: Task = {
      id: Date.now().toString(),
      taskName,
      completed: false,
      priority,
    };
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });
    if (res.ok) {
      const saved = await res.json();
      setTasks([...tasks, saved]);
    }
  };

  const handleToggle = async (id: string) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    const updated = { ...task, completed: !task.completed };

    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });
    if (res.ok) {
      setTasks(tasks.map((t) => (t.id === id ? updated : t)));
    }
  };

  const handleDeleteClick = (id: string) => {
    setDeleteId(id);
    setOpenModal(true);
  };

  const handleConfirmDelete = async () => {
    if (!deleteId) return;
    const res = await fetch(`${API_URL}/${deleteId}`, { method: "DELETE" });
    if (res.ok) {
      setTasks(tasks.filter((t) => t.id !== deleteId));
    }
    setOpenModal(false);
    setDeleteId(null);
  };

  const handleCancelDelete = () => {
    setOpenModal(false);
    setDeleteId(null);
  };

  const handleUpdate = async (
    id: string,
    taskName: string,
    priority: "low" | "medium" | "high"
  ) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    const updated = { ...task, taskName, priority };

    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });
    if (res.ok) {
      setTasks(tasks.map((t) => (t.id === id ? updated : t)));
    }
  };

  const filteredTasks = tasks.filter((t) => {
    const matchStatus =
      filters.status === "all" ||
      (filters.status === "completed" && t.completed) ||
      (filters.status === "active" && !t.completed);

    const matchPriority =
      filters.priority === "all" || t.priority === filters.priority;

    const matchSearch = t.taskName
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    return matchStatus && matchPriority && matchSearch;
  });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">📝 Task Manager</h1>
      <TaskForm onAdd={handleAdd} />
      <FilterControls
        status={filters.status}
        priority={filters.priority}
        search={filters.search}
        onStatusChange={(status) => setFilters({ ...filters, status })}
        onPriorityChange={(priority) => setFilters({ ...filters, priority })}
        onSearchChange={(search) => setFilters({ ...filters, search })}
      />
      <div>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            {...task}
            allTasks={tasks}
            onToggle={handleToggle}
            onDelete={handleDeleteClick}
            onUpdate={handleUpdate}
          />
        ))}
      </div>

      <Dialog open={openModal} onClose={handleCancelDelete}>
        <DialogTitle>Xóa Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bạn có chắc chắn muốn xóa task này không?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete}>Hủy</Button>
          <Button onClick={handleConfirmDelete} color="error" autoFocus>
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default App;
