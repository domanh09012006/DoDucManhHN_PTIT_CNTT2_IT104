import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Student } from "./types";
import {
  fetchStudentsApi,
  addStudentApi,
  updateStudentApi,
  deleteStudentApi,
} from "../api";

interface StudentsState {
  items: Student[];
  loading: boolean;
  error: string | null;
}

const initialState: StudentsState = {
  items: [],
  loading: false,
  error: null,
};

// Thunks
export const fetchStudents = createAsyncThunk("students/fetchAll", async () => {
  return await fetchStudentsApi();
});

export const addStudent = createAsyncThunk(
  "students/add",
  async (student: Omit<Student, "id">, { rejectWithValue }) => {
    try {
      return await addStudentApi(student);
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const updateStudent = createAsyncThunk(
  "students/update",
  async (student: Student, { rejectWithValue }) => {
    try {
      return await updateStudentApi(student);
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteStudent = createAsyncThunk(
  "students/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      await deleteStudentApi(id);
      return id;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

// Slice
const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchStudents.fulfilled,
        (state, action: PayloadAction<Student[]>) => {
          state.loading = false;
          state.items = action.payload;
        }
      )
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Fetch failed";
      })
      // add
      .addCase(
        addStudent.fulfilled,
        (state, action: PayloadAction<Student>) => {
          state.items.unshift(action.payload);
        }
      )
      // update
      .addCase(
        updateStudent.fulfilled,
        (state, action: PayloadAction<Student>) => {
          const idx = state.items.findIndex((s) => s.id === action.payload.id);
          if (idx !== -1) state.items[idx] = action.payload;
        }
      )
      // delete
      .addCase(
        deleteStudent.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.items = state.items.filter((s) => s.id !== action.payload);
        }
      );
  },
});

export default studentsSlice.reducer;
