import React from "react";
import { Button } from "antd";

export default function Bai1() {
  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button type="primary">Lưu</Button>
        <Button>Hủy</Button>
        <Button
          type="primary"
          style={{ backgroundColor: "#28a745", borderColor: "#28a745" }}
        >
          Thành công
        </Button>
        <Button
          type="primary"
          style={{
            backgroundColor: "#ffc107",
            borderColor: "#ffc107",
            color: "#000",
          }}
        >
          Cảnh báo
        </Button>
        <Button type="primary" danger>
          Báo lỗi
        </Button>
        <Button
          type="primary"
          style={{ backgroundColor: "#17a2b8", borderColor: "#17a2b8" }}
        >
          Thông tin
        </Button>
        <a href="#">Đường dẫn</a>
      </div>
    </div>
  );
}
