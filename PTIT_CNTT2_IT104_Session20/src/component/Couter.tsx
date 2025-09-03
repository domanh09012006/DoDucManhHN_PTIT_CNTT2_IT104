import React, { useReducer } from "react";

function counterReducer(state: number, action: { type: string }): number {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}
export default function Couter() {
  const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Tăng</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Giảm</button>
    </div>
  );
}
