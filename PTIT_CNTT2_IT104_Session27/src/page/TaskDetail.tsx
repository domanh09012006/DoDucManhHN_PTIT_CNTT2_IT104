import { useNavigate, useParams } from "react-router-dom";
import { tasks } from "../data/data";

export default function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((item) => item.id === Number(id));

  if (!task) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Công việc không tồn tại.</h2>
        <button onClick={() => navigate(-1)}>Quay lại</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <div style={{ border: "1px solid black", padding: 20, maxWidth: 500 }}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <button onClick={() => navigate(-1)}>Quay lại</button>
      </div>
    </div>
  );
}
