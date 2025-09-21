import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { addRandom } from "./reducer/RandomReducer";

export default function RandomNumber() {
  const numbers = useSelector((state: RootState) => state.random.numbers);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>{JSON.stringify(numbers)}</h2>
      <button onClick={() => dispatch(addRandom())}>
        Generate Random Number
      </button>
    </div>
  );
}
