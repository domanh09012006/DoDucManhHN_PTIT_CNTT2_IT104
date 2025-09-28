import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

import type { Student } from "./features/students/types";
import StudentForm from "./features/students/StudentForm";
import StudentList from "./features/students/StudentList";
import StudentSearchSortFilter from "./features/students/StudentSearchSortFilter";

import {
  fetchStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "./features/students/studentsSlice";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: students } = useSelector((state: RootState) => state.students);

  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<Partial<Student> | undefined>(
    undefined
  );

  // search/filter/sort state
  const [search, setSearch] = useState("");
  const [gradeFilter, setGradeFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"name" | "age">("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const grades = useMemo(() => {
    const g = Array.from(new Set(students.map((s) => s.grade))).sort();
    return g;
  }, [students]);

  const handleAddClick = () => {
    setEditing(undefined);
    setOpenForm(true);
  };

  const handleSubmit = (data: {
    id?: string;
    name: string;
    age: number;
    grade: string;
  }) => {
    // validate
    if (!data.name.trim()) {
      alert("Tên sinh viên không được để trống");
      return;
    }
    if (
      students.some(
        (s) =>
          s.name.toLowerCase() === data.name.trim().toLowerCase() &&
          s.id !== data.id
      )
    ) {
      alert("Tên sinh viên đã tồn tại");
      return;
    }
    if (data.age === null || data.age < 0) {
      alert("Tuổi sinh viên không hợp lệ");
      return;
    }
    if (!data.grade.trim()) {
      alert("Lớp học không được để trống");
      return;
    }

    if (data.id) {
      dispatch(updateStudent(data as Student));
    } else {
      dispatch(
        addStudent({ name: data.name, age: data.age, grade: data.grade })
      );
    }
    setOpenForm(false);
  };

  const handleEdit = (s: Student) => {
    setEditing(s);
    setOpenForm(true);
  };

  const handleDelete = (id: string) => {
    if (!window.confirm("Xác nhận xóa học sinh?")) return;
    dispatch(deleteStudent(id));
  };

  const handleClearFilters = () => {
    setSearch("");
    setGradeFilter("all");
    setSortBy("name");
    setSortDir("asc");
  };

  // Selector logic
  const filteredSorted = useMemo(() => {
    let out = students.slice();

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      out = out.filter((s) => s.name.toLowerCase().includes(q));
    }

    if (gradeFilter !== "all") {
      out = out.filter((s) => s.grade === gradeFilter);
    }

    out.sort((a, b) => {
      if (sortBy === "name") {
        const r = a.name.localeCompare(b.name);
        return sortDir === "asc" ? r : -r;
      } else {
        const r = a.age - b.age;
        return sortDir === "asc" ? r : -r;
      }
    });

    return out;
  }, [students, search, gradeFilter, sortBy, sortDir]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">🎓 Student Manager</h1>

      <div className="flex gap-4 mb-4">
        <Button variant="contained" color="primary" onClick={handleAddClick}>
          Add Student
        </Button>
      </div>

      <StudentSearchSortFilter
        search={search}
        gradeFilter={gradeFilter}
        sortBy={sortBy}
        sortDir={sortDir}
        grades={grades}
        onSearchChange={setSearch}
        onGradeChange={setGradeFilter}
        onSortChange={(by, dir) => {
          setSortBy(by);
          setSortDir(dir);
        }}
        onClear={handleClearFilters}
      />

      <div className="mt-6">
        <StudentList
          students={filteredSorted}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <StudentForm
        open={openForm}
        initial={editing}
        onClose={() => setOpenForm(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
