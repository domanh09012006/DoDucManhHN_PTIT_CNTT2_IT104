import axios from "axios";
import type { Student } from "./students/types";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
});

export const fetchStudentsApi = async (): Promise<Student[]> => {
  const r = await api.get<Student[]>("/students");
  return r.data;
};

export const addStudentApi = async (
  s: Omit<Student, "id">
): Promise<Student> => {
  const r = await api.post<Student>("/students", s);
  return r.data;
};

export const updateStudentApi = async (s: Student): Promise<Student> => {
  const r = await api.put<Student>(`/students/${s.id}`, s);
  return r.data;
};

export const deleteStudentApi = async (id: string): Promise<string> => {
  await api.delete(`/students/${id}`);
  return id
};
