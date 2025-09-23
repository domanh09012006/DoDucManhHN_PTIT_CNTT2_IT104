import type { Student } from "../../utils/types";

export interface StudentState {
  students: Student[];
}

const initialState: StudentState = {
  students: [
    { id: "SV001", name: "Nguyễn Văn A", age: 20, gender: "Nam" },
    { id: "SV002", name: "Nguyễn Văn B", age: 21, gender: "Nữ" },
    { id: "SV003", name: "Nguyễn Văn C", age: 19, gender: "Nam" },
  ],
};

export const studentReducer = (
  state: StudentState = initialState,
  action: any
): StudentState => {
  switch (action.type) {
    case "ADD_STUDENT":
      return { ...state, students: [...state.students, action.payload] };

    case "EDIT_STUDENT":
      return {
        ...state,
        students: state.students.map((s) =>
          s.id === action.payload.id ? action.payload : s
        ),
      };

    case "DELETE_STUDENT":
      return {
        ...state,
        students: state.students.filter((s) => s.id !== action.payload),
      };

    default:
      return state;
  }
};

// Action creators
export const addStudent = (student: Student) => ({
  type: "ADD_STUDENT",
  payload: student,
});

export const editStudent = (student: Student) => ({
  type: "EDIT_STUDENT",
  payload: student,
});

export const deleteStudent = (id: string) => ({
  type: "DELETE_STUDENT",
  payload: id,
});
