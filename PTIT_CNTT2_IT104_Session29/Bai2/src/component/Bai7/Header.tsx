import React from "react";

type Student = {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
}
type Props = {
  student: Student;
}
function Header({ student }: Props) {
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>{student.student_name}</td>
      <td>{student.email}</td>
      <td>{student.address}</td>
      <td>{student.phone}</td>
      <td>
        <button>Sua</button>
        <button>Xóa</button>
      </td>
    </tr>
  );
}

export default Header;
