import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import List from "./List";

type Todo = {
  id: number;
  name: string;
  status: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Modal sửa
  const [editTodo, setEditTodo] = useState<Todo | null>(null);
  const [editValue, setEditValue] = useState("");

  // Modal xóa
  const [deleteId, setDeleteId] = useState<number | null>(null);

  // Modal hoàn thành tất cả
  const [allDone, setAllDone] = useState(false);

  // Lấy danh sách
  const getTodos = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:8080/todo");
      setTodos(res.data);
      setAllDone(res.data.length > 0 && res.data.every((t: Todo) => t.status));
    } catch (err) {
      console.error("Lỗi getTodos:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  // ✅ Thêm công việc
  const addTodo = async () => {
    if (newTodo.trim() === "") {
      alert("Tên công việc không được để trống!");
      inputRef.current?.focus();
      return;
    }
    const isDuplicate = todos.some(
      (t) => t.name.toLowerCase() === newTodo.trim().toLowerCase()
    );
    if (isDuplicate) {
      alert("Tên công việc đã tồn tại!");
      inputRef.current?.focus();
      return;
    }
    try {
      setLoading(true);
      await axios.post("http://localhost:8080/todo", {
        name: newTodo.trim(),
        status: false,
      });
      setNewTodo("");
      inputRef.current?.focus();
      getTodos();
    } catch (err) {
      console.error("Lỗi addTodo:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Toggle trạng thái
  const handleToggle = async (id: number, status: boolean) => {
    try {
      setLoading(true);
      await axios.patch(`http://localhost:8080/todo/${id}`, { status });
      getTodos();
    } catch (err) {
      console.error("Lỗi toggle:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Xóa công việc (hiện modal xác nhận)
  const confirmDelete = async () => {
    if (deleteId === null) return;
    try {
      setLoading(true);
      await axios.delete(`http://localhost:8080/todo/${deleteId}`);
      setDeleteId(null);
      getTodos();
    } catch (err) {
      console.error("Lỗi delete:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Sửa công việc
  const handleUpdate = async () => {
    if (!editTodo) return;

    if (editValue.trim() === "") {
      alert("Tên công việc không được để trống!");
      return;
    }
    const isDuplicate = todos.some(
      (t) =>
        t.name.toLowerCase() === editValue.trim().toLowerCase() &&
        t.id !== editTodo.id
    );
    if (isDuplicate) {
      alert("Tên công việc đã tồn tại!");
      return;
    }

    try {
      setLoading(true);
      await axios.put(`http://localhost:8080/todo/${editTodo.id}`, {
        ...editTodo,
        name: editValue.trim(),
      });
      setEditTodo(null);
      setEditValue("");
      getTodos();
    } catch (err) {
      console.error("Lỗi update:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Spinner
  const Spinner = () => (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div
        style={{
          border: "4px solid #f3f3f3",
          borderTop: "4px solid #007bff",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          animation: "spin 1s linear infinite",
          margin: "auto",
        }}
      />
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );

  return (
    <div
      style={{
        width: "400px",
        margin: "20px auto",
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Quản lý công việc</h2>

      {/* Input thêm */}
      <div style={{ textAlign: "center", marginBottom: "15px" }}>
        <input
          ref={inputRef}
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Nhập tên công việc"
          style={{
            width: "280px",
            padding: "6px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button
          onClick={addTodo}
          style={{
            marginLeft: "5px",
            padding: "7px 12px",
            border: "1px solid #007bff",
            background: "#007bff",
            color: "#fff",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Thêm công việc
        </button>
      </div>

      {/* Danh sách */}
      {loading ? (
        <Spinner />
      ) : (
        <div style={{ maxHeight: "200px", overflowY: "auto" }}>
          {todos.map((todo) => (
            <List
              key={todo.id}
              todo={todo}
              onDelete={(id) => setDeleteId(id)}
              onToggle={handleToggle}
              onEdit={(t) => {
                setEditTodo(t);
                setEditValue(t.name);
              }}
            />
          ))}
        </div>
      )}

      {/* Modal Xóa */}
      {deleteId !== null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ background: "#fff", padding: "20px", borderRadius: "6px" }}>
            <h3>Xác nhận xóa?</h3>
            <button onClick={confirmDelete} style={{ marginRight: "10px" }}>
              Đồng ý
            </button>
            <button onClick={() => setDeleteId(null)}>Hủy</button>
          </div>
        </div>
      )}

      {/* Modal Sửa */}
      {editTodo && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ background: "#fff", padding: "20px", borderRadius: "6px" }}>
            <h3>Sửa công việc</h3>
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              style={{ padding: "6px", width: "200px" }}
            />
            <br />
            <button onClick={handleUpdate} style={{ marginTop: "10px", marginRight: "10px" }}>
              Cập nhật
            </button>
            <button onClick={() => setEditTodo(null)}>Hủy</button>
          </div>
        </div>
      )}

      {/* Modal hoàn thành tất cả */}
      {allDone && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ background: "#fff", padding: "20px", borderRadius: "6px" }}>
            <h3>🎉 Hoàn thành công việc</h3>
            <button onClick={() => setAllDone(false)}>Đóng</button>
          </div>
        </div>
      )}
    </div>
  );
}
