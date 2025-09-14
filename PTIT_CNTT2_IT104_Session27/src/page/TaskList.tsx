import { Link } from "react-router-dom";
import { tasks } from "../data/data";

export default function TaskList() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Danh sách công việc</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {tasks.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
            }}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link to={`/task/${item.id}`}>Xem chi tiết</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
