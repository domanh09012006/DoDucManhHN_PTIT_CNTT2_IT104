import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

function StudentTable() {
  const [students, setStudents] = useState([])

  const getAllStudents = async () => {
    try {
      const response = await axios.get("http://localhost:3001/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  return (
    <div>
      <div>
        <h3>
          Quản lý <b>sinh viên</b>
        </h3>
        <button>
          Thêm mới sinh viên
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Tên sinh viên</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Lựa chọn</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s:any) => (
            <Header key={s.id} student={s} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
