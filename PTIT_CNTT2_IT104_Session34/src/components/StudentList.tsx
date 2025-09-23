import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { deleteStudent } from "../store/reducers/studentReducer";

const StudentList: React.FC = () => {
  const students = useSelector((state: RootState) => state.studentState.students);
  const dispatch = useDispatch();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Mã sinh viên</TableCell>
            <TableCell>Tên sinh viên</TableCell>
            <TableCell>Tuổi</TableCell>
            <TableCell>Giới tính</TableCell>
            <TableCell>Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((s, i) => (
            <TableRow key={s.id}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{s.id}</TableCell>
              <TableCell>{s.name}</TableCell>
              <TableCell>{s.age}</TableCell>
              <TableCell>{s.gender}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="contained" color="error">Xem</Button>
                  <Button variant="contained" color="warning">Sửa</Button>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                      if (confirm("Bạn có chắc chắn muốn xóa không?")) {
                        dispatch(deleteStudent(s.id));
                      }
                    }}
                  >
                    Xóa
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentList;
