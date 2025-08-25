import React, { Component } from "react";

import TableRow from "./TableRow";

interface Student {
  id: number;
  code: string;
  name: string;
  dob: string;
  email: string;
  status: string;
}

export default class StudentTable extends Component {
  students: Student[] = [
    {
      id: 1,
      code: "SV001",
      name: "Nguyễn Văn A",
      dob: "21/12/2023",
      email: "nva@gmail.com",
      status: "active",
    },
    {
      id: 2,
      code: "SV002",
      name: "Nguyễn Thị B",
      dob: "21/11/2022",
      email: "ntb@gmail.com",
      status: "inactive",
    },
  ];

  render() {
    return (
      <table border={1} cellPadding={8} cellSpacing={0} width="100%">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã sinh viên</th>
            <th>Tên sinh viên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {this.students.map((s, index) => (
            <TableRow key={s.id} stt={index + 1} student={s} />
          ))}
        </tbody>
      </table>
    );
  }
}
