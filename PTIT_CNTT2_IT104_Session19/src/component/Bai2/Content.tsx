import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ textAlign: "center", fontSize: "1.2rem" }}>
      <p>Đây là phần nội dung chính của ứng dụng.</p>
      <p>
        Theme hiện tại:{" "}
        <b style={{ textTransform: "uppercase" }}>{theme}</b>
      </p>
    </div>
  );
}
export default Content;
