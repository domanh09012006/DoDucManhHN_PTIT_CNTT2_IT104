import { Alert } from "antd";

export default function Bai5() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Alert message="Thêm tài khoản thành công." type="success" showIcon closable />
      <Alert message="Thêm mới tài khoản thất bại." type="error" showIcon closable />
      <Alert message="Tên không được để trống." type="warning" showIcon closable />
    </div>
  );
}
