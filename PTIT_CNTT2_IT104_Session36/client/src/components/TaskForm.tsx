import { useState } from "react";
import { Button, MenuItem, Select, TextField } from "@mui/material";

interface TaskFormProps {
  onAdd: (taskName: string, priority: "low" | "medium" | "high") => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("low");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    onAdd(taskName, priority);
    setTaskName("");
    setPriority("low");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 mb-6 bg-white p-4 rounded-xl shadow"
    >
      <TextField
        label="Task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        fullWidth
        size="small"
      />
      <Select
        value={priority}
        onChange={(e) =>
          setPriority(e.target.value as "low" | "medium" | "high")
        }
        size="small"
      >
        <MenuItem value="low">Low</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="high">High</MenuItem>
      </Select>
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
};

export default TaskForm;
