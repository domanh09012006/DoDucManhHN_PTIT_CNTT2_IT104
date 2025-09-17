import React, { useState } from "react";
import ConfirmModal from "./ConfirmModal";

type Todo = {
  id: number;
  name: string;
  status: boolean;
};

type Props = {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number, status: boolean) => void;
  onEdit: (todo: Todo) => void;
};

export default function List({ todo, onDelete, onToggle, onEdit }: Props) {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete(todo.id);
    setShowModal(false);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px",
          padding: "6px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={todo.status}
            onChange={() => onToggle(todo.id, !todo.status)}
          />
          <span
            style={{
              marginLeft: "8px",
              textDecoration: todo.status ? "line-through" : "none",
            }}
          >
            {todo.name}
          </span>
        </div>
        <div>
          <button
            onClick={() => onEdit(todo)}
            style={{ marginRight: "5px", cursor: "pointer" }}
          >
            Sửa
          </button>
          <button
            onClick={handleDeleteClick}
            style={{ cursor: "pointer", color: "red" }}
          >
            Xóa
          </button>
        </div>
      </div>

      <ConfirmModal
        visible={showModal}
        message={`Bạn có chắc chắn muốn xóa "${todo.name}"?`}
        onConfirm={handleConfirmDelete}
        onCancel={() => setShowModal(false)}
      />
    </>
  );
}
