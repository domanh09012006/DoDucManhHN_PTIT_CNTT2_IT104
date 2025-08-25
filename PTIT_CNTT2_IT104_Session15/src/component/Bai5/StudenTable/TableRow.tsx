import React, { Component } from "react";

interface Props {
  stt: number;
  student: {
    code: string;
    name: string;
    dob: string;
    email: string;
    status: string;
  };
}
export default class TableRow extends Component<Props> {
  render() {
    const { stt, student } = this.props;
    return (
      <tr>
        <td>{stt}</td>
        <td>{student.code}</td>
        <td>{student.name}</td>
        <td>{student.dob}</td>
        <td>{student.email}</td>
        <td>
          {student.status === "active"
            ? "Đang hoạt động"
            : "Ngừng hoạt động"}
        </td>
        <td>
          <button>Chặn</button>
          <button>Sửa</button>
          <button>Xóa</button>
        </td>
      </tr>
    );
  }
}
