import React, { useReducer, useState } from "react";


const initialState = {
  loading: false,
  success: false,
  error: ""
};
function reducer(state: any, action: any) {
  if (action.type === "LOGIN_START") {
    return { loading: true, success: false, error: "" };
  }
  if (action.type === "LOGIN_SUCCESS") {
    return { loading: false, success: true, error: "" };
  }
  if (action.type === "LOGIN_ERROR") {
    return { loading: false, success: false, error: action.payload };
  }
  return state;
}
export default function LoginForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e: any) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    setTimeout(() => {
      if (username === "admin" && password === "123") {
        dispatch({ type: "LOGIN_SUCCESS" });
      } else {
        dispatch({ type: "LOGIN_ERROR", payload: "Sai tên đăng nhập hoặc mật khẩu" });
      }
    }, 1500);
  };
  return (
    <div>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleLogin}>
        <p>
          <input
            type="text"
            placeholder="Tên đăng nhập..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="Mật khẩu..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <button type="submit">
            {state.loading ? "Đang đăng nhập" : "Đăng nhập"}
          </button>
        </p>
      </form>
      {state.success ? <p>Đăng nhập thành công!</p> : null}
      {state.error ? <p style={{ color: "red" }}>{state.error}</p> : null}
    </div>
  );
}
