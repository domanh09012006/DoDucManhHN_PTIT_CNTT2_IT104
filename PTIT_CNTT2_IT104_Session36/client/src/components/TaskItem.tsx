import { useState } from "react";
import {
  Button,
  IconButton,
  TextField,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface TaskItemProps {
  id: string;
  taskName: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (
    id: string,
    taskName: string,
    priority: "low" | "medium" | "high"
  ) => void;
  allTasks: { id: string; taskName: string }[];
}

const TaskItem: React.FC<TaskItemProps> = ({
  id,
  taskName,
  completed,
  priority,
  onToggle,
  onDelete,
  onUpdate,
  allTasks,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskName, setEditTaskName] = useState(taskName);
  const [editPriority, setEditPriority] = useState(priority);
  const [error, setError] = useState("");
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleSave = () => {
    if (!editTaskName.trim()) {
      setError("Tên công việc không được để trống");
      return;
    }
    const isDuplicate = allTasks.some(
      (t) =>
        t.taskName.toLowerCase() === editTaskName.toLowerCase() && t.id !== id
    );
    if (isDuplicate) {
      setError("Tên công việc đã tồn tại");
      return;
    }
    if (!editPriority) {
      setError("Vui lòng chọn độ ưu tiên");
      return;
    }

    setError("");
    onUpdate(id, editTaskName.trim(), editPriority);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between bg-white p-3 mb-2 rounded shadow">
      <div className="flex items-center flex-1 gap-2">
        <Checkbox checked={completed} onChange={() => onToggle(id)} />
        {isEditing ? (
          <>
            <TextField
              size="small"
              label="Công việc"
              value={editTaskName}
              onChange={(e) => setEditTaskName(e.target.value)}
              error={!!error}
            />
            <Select
              size="small"
              value={editPriority}
              onChange={(e) => setEditPriority(e.target.value as any)}
              displayEmpty
            >
              <MenuItem value="">-- Ưu tiên --</MenuItem>
              <MenuItem value="low">Thấp</MenuItem>
              <MenuItem value="medium">Trung bình</MenuItem>
              <MenuItem value="high">Cao</MenuItem>
            </Select>
            <Button variant="contained" size="small" onClick={handleSave}>
              Cập nhật
            </Button>
          </>
        ) : (
          <span
            className={`flex-1 ${
              completed ? "line-through text-gray-400" : ""
            }`}
          >
            {taskName} <span className="text-sm text-gray-500">({priority})</span>
          </span>
        )}
      </div>

      <div className="flex gap-1">
        {!isEditing && (
          <IconButton size="small" onClick={() => setIsEditing(true)}>
            <EditIcon fontSize="small" />
          </IconButton>
        )}
        <IconButton size="small" color="error" onClick={() => setOpenConfirm(true)}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>

      {error && (
        <FormHelperText error className="ml-10">
          {error}
        </FormHelperText>
      )}

      <Dialog open={openConfirm} onClose={() => setOpenConfirm(false)}>
        <DialogTitle>Xác nhận xóa</DialogTitle>
        <DialogContent>Bạn có chắc muốn xóa công việc này?</DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenConfirm(false)}>Hủy</Button>
          <Button
            color="error"
            onClick={() => {
              onDelete(id);
              setOpenConfirm(false);
            }}
          >
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TaskItem;
