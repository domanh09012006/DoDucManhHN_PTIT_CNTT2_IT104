import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function ListUser() {
  // ✅ Lấy danh sách user từ reducer "list"
  const users = useSelector((state: RootState) => state.list.users);

  return (
    <table border={1} cellPadding={5} style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Địa chỉ</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.userName}</td>
            <td>{u.gender}</td>
            <td>{u.dateBirth}</td>
            <td>{u.address}</td>
            <td>
              <button>Sửa</button>
              <button>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
