import React, { useReducer, useState } from "react";

// Khai báo state
interface UserState {
  name: string;
  email: string;
}

// Khai báo action
type Action =
  | { type: "setName"; payload: string }
  | { type: "setEmail"; payload: string }
  | { type: "reset" };

// Reducer function
function userReducer(state: UserState, action: Action): UserState {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setEmail":
      return { ...state, email: action.payload };
    case "reset":
      return { name: "", email: "" };
    default:
      return state;
  }
}

function UserProfile2() {
  const [state, dispatch] = useReducer(userReducer, { name: "", email: "" });
  const [submit, setSubmit] = useState(false);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmit(true);
  };
  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <label>Nhập tên: </label>
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "setName", payload: e.target.value })
          }
        />
        <label>Nhập email: </label>
        <input
          type="email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "setEmail", payload: e.target.value })
          }
        />
        <button type="submit">Gửi</button>
        <button type="button" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
      </form>
      {submit && (
        <div style={{ marginTop: "20px" }}>
          <p><b>Tên:</b> {state.name}</p>
          <p><b>Email:</b> {state.email}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile2;
