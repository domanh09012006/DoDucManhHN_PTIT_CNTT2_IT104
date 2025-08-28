import { useReducer } from "react";

interface State {
  text: string;
}
type Action = {
  type: "change";
  payload: string;
};
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "change":
      return { ...state, text: action.payload };
    default:
      return state;
  }
};
function InputText() {
  const [state, dispatch] = useReducer(reducer, { text: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "change", payload: e.target.value });
  };
  return (
    <div>
      <h1>{state.text || "Input change"}</h1>
      <input
        type="text"
        value={state.text}
        onChange={handleChange}
        placeholder="Input change"
      />
    </div>
  );
}
export default InputText;
